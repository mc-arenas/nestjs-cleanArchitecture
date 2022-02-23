import { Module } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Message } from 'src/infrastructure/entities/message.entity';
import { User } from 'src/infrastructure/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'database.sqlite',
      });
      sequelize.addModels([User, Message]);
      await sequelize.sync();
      return sequelize;
    },
  },
];


@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
