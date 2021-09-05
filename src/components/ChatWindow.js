import React from 'react'
import PropTypes from 'prop-types'
function Chat (props) {
	return (
    	<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{props.user}</div>

            <ul className="message-list">
              {props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === props.user ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." value={props.chatText}
                        onChange={(event)=>props.updateChatText(event.target.value)}/>
                <div className="input-group-append">
                  <button className="btn submit-button"
                  	onClick={
                    	(e)=>{
                        	e.preventDefault();
                            props.addChat(props.user, props.chatText);
                        	props.clearChatText();
                        }  
                      } 
                    disabled={props.chatText==''?props.isDisabled():''}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        </div>
    )
}

Chat.propTypes = {
  addChat: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
};

export default Chat;