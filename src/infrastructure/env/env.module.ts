import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  exports: [ConfigModule.forRoot()],
})
export class EnvModule {}
