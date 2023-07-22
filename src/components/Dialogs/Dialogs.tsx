import React from 'react';
import s from './Dialogs.module.css'
import {useNavigate} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsDateType, MassagePageType, MessagesDateType } from '../redux/state';


type DialogsPropsType={
    messagesPage: MassagePageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const navigate = useNavigate();
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                  props.messagesPage.dialogsData.map((dialog: DialogsDateType) =>{
                      return(
                          <DialogItem name={dialog.name} id={dialog.id}/>
                      )
                  })
                }


            </div>

            <div className={s.messages}>
                {
                    props.messagesPage.messagesData.map((message: MessagesDateType) =>{
                        return(
                            <Message message={message.message} id={message.id}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Dialogs;