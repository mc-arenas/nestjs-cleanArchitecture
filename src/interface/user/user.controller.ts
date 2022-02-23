import {
  Controller,
  Get,
  Request,
  Param,
  UseGuards,
  Put,
  Body,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UserControllerApplication } from '../../application/user/user.controller';
import { ClientAuthGuard } from '../../infrastructure/guards/client-auth.guard';

@Controller('user')
export class UserController {
  private userControllerApplication: UserControllerApplication = new UserControllerApplication();

  constructor() {}

  @UseGuards(ClientAuthGuard)
  @Get()
  async findAll(@Res() res: Response) {
    const response = await this.userControllerApplication.findAll();
    res.status(response.statusCode).send(response.body);
  }

  @UseGuards(ClientAuthGuard)
  @Get('me')
  async findMe(@Request() req, @Res() res: Response) {
    const response = await this.userControllerApplication.findOne(req.user.userId);
    res.status(response.statusCode).send(response.body);
  }

  @UseGuards(ClientAuthGuard)
  @Get(':id')
  async findOne(@Param('id') userId: number, @Res() res: Response) {
    const response = await this.userControllerApplication.findOne(userId);
    res.status(response.statusCode).send(response.body);
  }

  @UseGuards(ClientAuthGuard)
  @Put()
  async update(@Request() req, @Res() res: Response, @Body() body: any) {
    const response = await this.userControllerApplication.update(req.user.userId, body);
    res.status(response.statusCode).send(response.body);
  }
}
