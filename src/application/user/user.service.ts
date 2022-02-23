import { RegisterUserDto } from '../../domain/user/dto/register-user.dto';
import { UpdateUserDto } from '../../domain/user/dto/update-user.dto';
import { UserService } from '../../interface/user/user.service';

export class UserServiceApplication {

  private userService: UserService = new UserService();

  constructor() {}

  async findAll() {
    return await this.userService.findAll();
  }

  async findOne(userId: number) {
    return await this.userService.findOne(userId);
  }

  async updateUser(userId: number, updateUserDto: UpdateUserDto) {
    return await this.userService.update(userId, updateUserDto);
  }

  async findUserByEmail(email: string) {
    return await this.userService.findOneActive(email);
  }

  async registerUser(RegisterUserDto: RegisterUserDto) {
    return await this.userService.create(RegisterUserDto);
  }
}
