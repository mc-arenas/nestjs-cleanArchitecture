import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DatabaseModule } from '../../infrastructure/databases/database.module';
import { EnvModule } from 'src/infrastructure/env/env.module';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule, EnvModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
