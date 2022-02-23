import { UpdateUserDto } from '../../domain/user/dto/update-user.dto';
import { UserServiceApplication } from './user.service';

export class UserControllerApplication {
  readonly userServiceApplication: UserServiceApplication =
    new UserServiceApplication();

  constructor() {}

  async findAll() {
    try {
      return {statusCode: 200, body: await this.userServiceApplication.findAll() }
    } catch (error) {
      return {
        statusCode: error.statusCode || 500,
        body: error.message || 'Internal server error',
      }
    }
  }

  async findMe(userId: number) {
    try {
      return { statusCode: 200, body: await this.userServiceApplication.findOne(userId) }
    } catch (error) {
      return {
        statusCode: error.statusCode || 500,
        body: error.message || 'Internal server error',
      }
    }
  }

  async findOne(userId: number) {
    try {
      return { statusCode: 200, body: await this.userServiceApplication.findOne(userId) }
    } catch (error) {
      return {
        statusCode: error.statusCode || 500,
        body: error.message || 'Internal server error',
      }
    }
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    try {
      if (updateUserDto.name == undefined || updateUserDto.name.trim() == '') {
        throw { message: 'Invalid data', statusCode: 400 };
      }

      return { statusCode: 200, body: await this.userServiceApplication.updateUser(
          userId,
          updateUserDto,
        )
      }
    } catch (error) {
      return {
        statusCode: error.statusCode || 500,
        body: error.message || 'Internal server error',
      }
    }
  }
}
