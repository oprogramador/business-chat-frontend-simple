import { Message, User } from 'business-chat-model';
import React, { Component } from 'react';
import FormData from 'react-form-data';
import reactMixin from 'react-mixin';
import serializer from '../services/serializer';

export default class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateFormData = this.updateFormData.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const user = serializer.create(new User({ username: 'foo' }));
    const defaultRoom = serializer.create({ id: 'default-room' });

    return defaultRoom.reload()
      .then(() => defaultRoom.getMessages().reload())
      .then(() => {
        serializer.create(new Message({
          room: defaultRoom,
          sender: user,
          text: this.formData.message,
        }));

        return defaultRoom.save();
      });
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
