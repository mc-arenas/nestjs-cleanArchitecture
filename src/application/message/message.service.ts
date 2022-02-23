import { MessageService } from '../../interface/message/message.service';
import { CreateMessageDto } from '../../domain/message/dto/create-message.dto';

export class MessageServiceApplication {

  private messageService: MessageService = new MessageService();

  constructor() {}

  async create(createMessageDto: CreateMessageDto) {
    return await this.messageService.create(createMessageDto);
  }

  async findAll(userId: number) {
    return await this.messageService.findMessage(userId);
  }
}
