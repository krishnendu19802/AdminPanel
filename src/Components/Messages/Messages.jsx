import React from 'react'
import './Messages.css'
import SideNavbar from '../SideNavbar/SideNavbar'
export default function Messages() {
    return (
        <>
            <SideNavbar />
            <div className="container">
                <h1>Messages</h1>

                <div id="chatContainer">
                    <div className="chat" id="messageArea">
                        {/* <!-- Chat messages will be dynamically added here using JavaScript --> */}
                    </div>
                    <div className="input-container">
                        <input type="text" id="messageInput" placeholder="Type your message..." />
                        <button id="sendButton">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}
