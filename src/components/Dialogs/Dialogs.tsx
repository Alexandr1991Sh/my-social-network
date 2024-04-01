import React, { ChangeEvent, useRef } from 'react';
import s from './Dialogs.module.css'
import { useNavigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsDateType, MessagesDateType} from "../store/state";

type DialogsPropsType = {
    dialogsData: DialogsDateType[]
    messagesData: MessagesDateType[]
    newMessageBody: string
    updateNewMessageBody: (newMessageTextBody: string) => void
    sendMessage: () => void
}


export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const navigate = useNavigate();
    let newMessage = useRef<HTMLTextAreaElement>(null)
    const addMessageHandler = () => {
       props.sendMessage()
    }
    const  updateMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewMessageBody(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.dialogsData.map((dialog) => {
                        return (
                            <DialogItem name={dialog.name} id={dialog.id} />
                        )
                    })
                }
            </div>
            <div className={s.messages}>
                {props.messagesData.map((el)=><Message id={el.id} message={el.message}/>)}

            </div>
            <div>
                <textarea value={props.newMessageBody} onChange={updateMessageTextHandler} ref={newMessage}></textarea>
                <button onClick={addMessageHandler}>Add</button>
            </div>
        </div>
    )
}

export default Dialogs;
