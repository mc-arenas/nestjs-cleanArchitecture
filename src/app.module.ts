import { Module } from '@nestjs/common';
import { EnvModule } from './infrastructure/env/env.module';
import { UserModule } from './interface/user/user.module';
import { AuthModule } from './interface/auth/auth.module';
import { DatabaseModule } from './infrastructure/databases/database.module';
import { MessageModule } from './interface/message/message.module';
import { UserService } from './interface/user/user.service';
import { MessageService } from './interface/message/message.service';

@Module({
  imports: [EnvModule, DatabaseModule, UserModule, AuthModule, MessageModule],
  providers: [UserService, MessageService],
})
export class AppModule {}
