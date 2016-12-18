import React, { Component } from 'react';
import ChatForm from './component/ChatForm';
import ChatMessages from './component/ChatMessages';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Business chat</h1>
        <ChatMessages />
        <ChatForm />
      </div>
    );
  }
}
