import { Message, Room, User } from 'business-chat-model';
import React, { Component } from 'react';
import FormData from 'react-form-data';
import reactMixin from 'react-mixin';

export default class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateFormData = this.updateFormData.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const user = new User({ username: 'foo' });
    const room = new Room({ name: 'bar' });
    const message = new Message({
      room,
      sender: user,
      text: this.formData.message,
    });
    this.lastMessage = message.getText();
    this.forceUpdate();
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit } onChange={ this.updateFormData }>
        <div>{ this.lastMessage }</div>
        <input name="message" />
      </form>
    );
  }
}
reactMixin.onClass(ChatForm, FormData);
