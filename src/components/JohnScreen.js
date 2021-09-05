import React, {Component} from 'react'

class JohnScreen extends  Component {
  state = {
    	chatText: ''
    }
  
  	updateChatText = (chatText) =>{
      this.setState(()=>({
            chatText: chatText
        }))
    }
  
  	clearChatText = () => {
        this.updateChatText('')
    }
	render(){
      	// For comparision & Learning purposes, i did not making use of the chat component for John's Screen
        // State resides here and props are gotten from the App Component 
		const users = [{ username: 'John' }];

  

    	return(
        	<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[0].username}</div>
            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.chatText}
                        onChange={(event)=>this.updateChatText(event.target.value)}/>
                <div className="input-group-append">
                  <button onClick={
                    	(e)=>{
                        	e.preventDefault();
                            this.props.addChat(users[0].username, this.state.chatText);
                        	this.clearChatText();
                        }  
                      }
                      className="btn submit-button" 
                      disabled={this.state.chatText==''?this.props.isDisabled():''}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        )
    }
}

export default JohnScreen