import React from 'react';
import s from './Dialogs.module.css'
import {useNavigate} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


type DialogsPropsType={


}

export const Dialogs = (props:any) => {
    const navigate = useNavigate();
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                  props.dialogsData.map((dialog:any) =>{
                      return(
                          <DialogItem name={dialog.name} id={dialog.id}/>
                      )
                  })
                }


            </div>

            <div className={s.messages}>
                {
                    props.messagesData.map((message:any) =>{
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