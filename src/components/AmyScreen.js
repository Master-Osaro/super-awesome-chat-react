import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Chat from './ChatWindow'

class AmyScreen extends  Component {

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
      	//Making Use of the chat component for Amy to pass props & State
		const users = [{ username: 'Amy' }]
    	return(
        	<Chat
            messages = {this.props.messages}
          	user = {users[0].username}
            chatText = {this.state.chatText}
            addChat = {this.props.addChat}
          	updateChatText={this.updateChatText}
          	clearChatText={this.clearChatText}
  			isDisabled={this.props.isDisabled}
  			/>
        )
    }
}

AmyScreen.propTypes = {
  addChat: PropTypes.func.isRequired,
  isDisabled: PropTypes.func.isRequired,
};

export default AmyScreen