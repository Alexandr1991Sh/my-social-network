import React, { ChangeEvent, useRef } from 'react';
import s from './Dialogs.module.css'
import { useNavigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsDateType, MassagePageType, MessagesDateType } from '../store/state';
import { RootActionType } from '../../types/actionType';
import { addMessageAC, updateMessageAC } from '../store/reducers/dialogsReducer';


type DialogsPropsType = {
    messagesPage: MassagePageType
    dispatch: (action: RootActionType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    // const navigate = useNavigate();

    let newMassage = useRef<HTMLTextAreaElement>(null)

    const updateMassageHandler = () => {
        if (newMassage.current) props.dispatch(addMessageAC(newMassage.current.value))
    }

    const  updateMassageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch(updateMessageAC(e.currentTarget.value))   
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.messagesPage.dialogsData.map((dialog: DialogsDateType) => {
                        return (
                            <DialogItem name={dialog.name} id={dialog.id} />
                        )
                    })
                }


            </div>

            <div className={s.messages}>
                {
                    props.messagesPage.messagesData.map((message: MessagesDateType) => {
                        return (
                            <Message message={message.message} id={message.id} />
                        )
                    })
                }

            </div>
            <div>
                <textarea value={props.messagesPage.updateMassage} onChange={updateMassageTextHandler} ref={newMassage}></textarea>
                <button onClick={updateMassageHandler}>Add</button>
            </div>
        </div>
    )
}

export default Dialogs;