import React, { Component } from 'react';
import _ from 'lodash';
import serializer from '../services/serializer';

const interval = 500;

export default class ChatMessages extends Component {
  constructor(props) {
    super(props);
    this.messages = [];
    this.updateData = this.updateData.bind(this);

    setInterval(this.updateData, interval);
  }

  updateData() {
    const defaultRoom = serializer.create({ id: 'default-room' });

    return defaultRoom.reload()
      .then(() => defaultRoom.getMessages().reload())
      .then(() => {
        const messages = defaultRoom.getMessages();
        const oldLength = this.messages.length;

        return Promise.all(_.times(messages.size() - oldLength, (i) => {
          const message = messages.get(oldLength + i);

          return message.reload()
            .then(() => this.messages.push(message));
        }));
      })
      .then(() => this.forceUpdate());
  }

  render() {
    return (
      <div>
        <div>Messages</div>
        {
          this.messages.map(message =>
            <div>{ message.getText ? message.getText() : 'null' }</div>
          )
        }
      </div>
    );
  }
}
