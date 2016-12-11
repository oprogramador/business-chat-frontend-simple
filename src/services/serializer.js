import {
  Message,
  Room,
  Team,
  User,
} from 'business-chat-model';
import { SerializerFactory } from 'js-abstract-synchronizer';
import config from '../config';

const serializer = SerializerFactory.create({
  implementationName: 'HttpSerializer',
  implementationParams: {
    url: config.backend.url,
  },
  prototypes: {
    Array: Array.prototype,
    Message: Message.prototype,
    Room: Room.prototype,
    Team: Team.prototype,
    User: User.prototype,
  },
});

export default serializer;
