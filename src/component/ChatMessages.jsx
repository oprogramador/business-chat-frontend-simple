import React, { Component } from 'react';
import serializer from '../services/serializer';

const interval = 200;

export default class ChatMessages extends Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);

    setInterval(this.updateData, interval);
  }

  updateData() {
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
    return (
      <div>
        <div>Messages</div>
        <div>{ this.data }</div>
      </div>
    );
  }
}
