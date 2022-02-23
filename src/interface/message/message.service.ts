import { Injectable } from '@nestjs/common';
import { Message } from '../../infrastructure/entities/message.entity';

@Injectable()
export class MessageService {

  constructor() {}

  async create(message: any) {
    return await Message.create(message)
  }

  async findMessage(userId: number) {
    return await Message.findAll({
      where: {
        userId: userId,
      },
    })
  }
}