import {
  Controller,
  Get,
  Post,
  Request,
  Body,
  UseGuards,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { MessageControllerApplication } from '../../application/message/message.controller';
import { ClientAuthGuard } from '../../infrastructure/guards/client-auth.guard';

@Controller('message')
export class MessageController {
  private readonly messageControllerApplication: MessageControllerApplication = new MessageControllerApplication();

  constructor() {}

  @UseGuards(ClientAuthGuard)
  @Post()
  async create(@Request() req, @Res() res: Response, @Body() body: any) {
    const response = await this.messageControllerApplication.create(req.user.userId, body);
    res.status(response.statusCode).send(response.body);
  }

  @UseGuards(ClientAuthGuard)
  @Get()
  async findAll(@Request() req, @Res() res: Response) {
    const response = await this.messageControllerApplication.findAll(req.user.userId);
    res.status(response.statusCode).send(response.body);
  }
}
