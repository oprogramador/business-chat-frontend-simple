import React, { Component } from 'react';
import serializer from '../services/serializer';

export default class ChatMessages extends Component {
  getData() {
    const defaultRoom = serializer.create({ id: 'default-room' });

    return defaultRoom.reload()
      .then(() => defaultRoom.getMessages().reload())
      .then(() => defaultRoom.getMessages().get(0).reload())
      .then(() => defaultRoom.getMessages().get(0).getText())
      .then((data) => {
        this.data = data;
        this.forceUpdate();
      });
  }

  render() {
    this.getData();

    return (
      <div>
        <div>Messages</div>
        <div>{ this.data }</div>
      </div>
    );
  }
}
