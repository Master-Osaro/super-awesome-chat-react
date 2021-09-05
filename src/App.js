import React, { Component } from 'react';
import AmyScreen from './components/AmyScreen'
import JohnScreen from './components/JohnScreen'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  /*  Demo Messages
      { username: 'Amy', text: 'Hi, Jon!' },
  	  { username: 'Amy', text: 'How are you?' },
  	  { username: 'John', text: 'Hi, Amy! Good, you?' }
  */
  state = {
  	messages: []
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return true;
  };
  
  // function to add new message 
  addMessage = (user, mssg) =>{
    this.setState({messages: [...this.state.messages, {username: user, text:mssg}]});
  }
  
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React - Coding Practice</h1>
        </header>
        <div className="container">
          
		  <AmyScreen messages={this.state.messages} isDisabled={this.isDisabled} addChat={this.addMessage}/>
		  <JohnScreen messages={this.state.messages} isDisabled={this.isDisabled} addChat={this.addMessage}/>
          
        </div>
      </div>
    );
  }
}

export default App;
