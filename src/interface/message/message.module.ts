import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { DatabaseModule } from '../../infrastructure/databases/database.module';
import { EnvModule } from 'src/infrastructure/env/env.module';
import { MessageService } from './message.service';

@Module({
  imports: [DatabaseModule, EnvModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
