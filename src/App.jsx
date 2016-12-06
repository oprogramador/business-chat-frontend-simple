import React, { Component } from 'react';
import ChatForm from './component/ChatForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Business chat</h1>
        <ChatForm />
      </div>
    );
  }
}
