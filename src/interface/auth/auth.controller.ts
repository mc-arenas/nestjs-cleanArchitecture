import { Controller, Post, Body, UseGuards, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthControllerApplication } from '../../application/auth/auth.controller';
import { NoAuthGuard } from '../../infrastructure/guards/no-auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  private readonly authControllerApplication: AuthControllerApplication =
    new AuthControllerApplication();

  constructor(private jwtService: JwtService) {}

  @Post('login')
  @UseGuards(NoAuthGuard)
  async login(@Res() res: Response, @Body() body: any) {
    const response = await this.authControllerApplication.login(body, this.jwtService);
    res.status(response.statusCode).send(response.body);
  }

  @Post('register')
  @UseGuards(NoAuthGuard)
  async register(@Res() res: Response, @Body() body: any) {
    const response = await this.authControllerApplication.register(body, this.jwtService);
    res.status(response.statusCode).send(response.body);
  }
}
