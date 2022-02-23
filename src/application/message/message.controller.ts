import { CreateMessageDto } from '../../domain/message/dto/create-message.dto';
import { MessageServiceApplication } from './message.service';

export class MessageControllerApplication {
  private readonly messageServiceApplication: MessageServiceApplication =
    new MessageServiceApplication();

  constructor() {}

  async create(userId: number, createMessageDto: CreateMessageDto) {
    try {
      createMessageDto.userId = userId;

      if (
        createMessageDto.content == undefined ||
        createMessageDto.content.trim() == ''
      ) {
        throw { message: 'Invalid data', statusCode: 400 };
      }

      return {statusCode: 200, body: await this.messageServiceApplication.create(createMessageDto) }
    } catch (error) {
      return {
        statusCode: error.statusCode || 500,
        body: error.message || 'Internal server error',
      }
    }
  }

  async findAll(userId) {
    try {
      return {statusCode: 200, body: await this.messageServiceApplication.findAll(userId) }
    } catch (error) {
      return {
        statusCode: error.statusCode || 500,
        body: error.message || 'Internal server error',
      }
    }
  }
}
