import React from 'react'
import { useParams } from 'react-router-dom'
import SideNavbar from '../SideNavbar/SideNavbar'
import BottomNavbar from '../BottomNavbar/BottomNavbar'
import messages from './message_list'
export default function IndvMessage() {

    const message_list = () => {
        const ms = messages.map((msg, index) => {
            return (
                <>
                    <div></div>
                    {msg.sender === 'Host' && <div className='chat-message host-message ms-auto m-1 p-1'>{msg.text}</div>}

                    {msg.sender !== 'Host' && <div className='chat-message user-message me-auto m-1 p-1'>{msg.text}</div>}


                </>
            )
        })
        return ms
    }
    console.log(messages)
    const params = useParams().username
    return (
        <>

            {window.innerWidth > 560 && <SideNavbar />}
            <div className={`main-box  px-2   `}>
                <div className="container-messages rounded-3 shadow-lg  ">
                    <h3 className="bg-primary  text-center rounded-top mb-0 p-2">{params}</h3>
                    <div className="message_list px-2">
                        {message_list()}
                    </div>
                    <div className="input-chat  p-2 rounded-bottom">
                        <form action="" className='d-flex'>
                            <input type="text" required placeholder='type your message' />
                            <button className="btn btn-primary mx-1">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            {window.innerWidth < 560 && <BottomNavbar />}

        </>
    )
}
