import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { clientAuthStrategy } from './client-auth.strategy';
import { EnvModule } from 'src/infrastructure/env/env.module';

@Module({
  imports: [
    EnvModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '10h' },
    }),
  ],
  controllers: [AuthController],
  providers: [clientAuthStrategy],
})
export class AuthModule {}
