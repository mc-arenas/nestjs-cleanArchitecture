import { Injectable } from '@nestjs/common';
import { User } from '../../infrastructure/entities/user.entity';

@Injectable()
export class UserService {

  constructor() {}

  async findAll() {
    return await User.findAll({ where: { active: true } });
  }

  async findOne(userId: number) {
    return await User.findByPk(userId);
  }

  async findOneActive(email: string) {
    return await User.findOne({
      where: {
        active: true,
        email: email,
      },
    });
  }

  async update(userId: number, user: Object) {
    return await User.update(user, {
      where: {
        id: userId,
      },
    });
  }

  async create(user: any) {
    return await User.create(user);
  }
}