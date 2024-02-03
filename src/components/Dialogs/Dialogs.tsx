import React, {ChangeEvent, useRef} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsDateType, MassagePageType, MessagesDateType} from '../store/state';


type DialogsPropsType = {
    state: MassagePageType
    updateMassage: (newMassageText: string) => void
    addMessage: (message: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    // const navigate = useNavigate();

    let newMassage = useRef<HTMLTextAreaElement>(null)

    const addMessageHandler = () => {
        if (newMassage.current) props.addMessage(newMassage.current.value)
    }

    const updateMassageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMassage(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.state.dialogsData.map((dialog: DialogsDateType) => {
                        return (
                            <DialogItem name={dialog.name} id={dialog.id}/>
                        )
                    })
                }


            </div>

            <div className={s.messages}>
                {
                    props.state.messagesData.map((message: MessagesDateType) => {
                        return (
                            <Message message={message.message} id={message.id}/>
                        )
                    })
                }

            </div>
            <div>
                <textarea value={props.state.updateMassage} onChange={updateMassageTextHandler}
                          ref={newMassage}></textarea>
                <button onClick={addMessageHandler}>Add</button>
            </div>
        </div>
    )
}

export default Dialogs;