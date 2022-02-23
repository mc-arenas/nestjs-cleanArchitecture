import * as bcrypt from 'bcrypt';
import { LoginUserDto } from 'src/domain/user/dto/login-user.dto';
import { RegisterUserDto } from 'src/domain/user/dto/register-user.dto';
import { UserServiceApplication } from '../user/user.service';

export class AuthControllerApplication {
  private userServiceApplication: UserServiceApplication =
    new UserServiceApplication();

  constructor() {}

  async login(loginUserDto: LoginUserDto, jwtService: any) {
    try {
      if (
        loginUserDto.email == undefined ||
        loginUserDto.email.trim() == '' ||
        loginUserDto.password == undefined ||
        loginUserDto.password.trim() == '' ||
        loginUserDto.password.length <= 7
      ) {
        throw { message: 'Invalid data', statusCode: 400 };
      }

      // check email
      const user = await this.userServiceApplication.findUserByEmail(
        loginUserDto.email,
      );
      if (user == null) {
        throw { message: 'Not found user', statusCode: 404 };
      }

      const isValidPassword = await bcrypt.compare(
        loginUserDto.password,
        user.password,
      );
      if (!isValidPassword) {
        throw {
          message: 'Invalid password',
          statusCode: 401,
        };
      }

      return {
        statusCode: 200,
        body: {
          access_token: jwtService.sign({
            id: user.id,
            role: user.role,
          }),
        }
      };
    } catch (error) {
      return {
        statusCode: error.statusCode || 500,
        body: error.message || 'Internal server error',
      }
    }
  }

  async register(registerUserDto: RegisterUserDto, jwtService: any) {
    try {
      if (
        registerUserDto.email == undefined ||
        registerUserDto.email.trim() == '' ||
        registerUserDto.password == undefined ||
        registerUserDto.password.trim() == '' ||
        registerUserDto.password.length <= 7 ||
        registerUserDto.role == undefined ||
        registerUserDto.role.trim() == '' ||
        registerUserDto.name == undefined ||
        registerUserDto.name.trim() == ''
      ) {
        throw { message: 'Invalid data', statusCode: 400 };
      }

      // check email
      let user = await this.userServiceApplication.findUserByEmail(
        registerUserDto.email,
      );
      if (user != null) {
        throw {
          statusCode: 400,
          message: 'Invalid data: email already registered',
        };
      }

      // register user
      registerUserDto.password = await bcrypt.hash(
        registerUserDto.password,
        10,
      );
      user = await this.userServiceApplication.registerUser(registerUserDto);

      return {
        statusCode: 200,
        body: {
          access_token: jwtService.sign({
            id: user.id,
            role: user.role,
          })
        }
      };
    } catch (error) {
      return {
        statusCode: error.statusCode || 500,
        body: error.message || 'Internal server error',
      }
    }
  }
}
