import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthenticationDto } from './dto/create-authentication.dto';
import { UpdateAuthenticationDto } from './dto/update-authentication.dto';
import * as bcrypt from 'bcrypt';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UsersService } from 'src/users/users.service';
import { CreateLoginDto } from './dto/create-login.dto';
import passport from 'passport';

@Injectable()
export class AuthenticationService {
  constructor(private usersService: UsersService) {}

  async login() {
    return 'login';
  }

  async validateUser(email: string) {
    const user = await this.usersService.findOne({ email: email });

    if (user && user.email === email) {
      const { email, ...result } = user;
      return result;
    }
    return null;
  }

  /*
  async validateUser(email: string) {
    const user = await this.usersService.findOne({ email: email });

    if (user && user.email === email) {
      const { email, ...result } = user;
      return result;
    }
    return null;
  }

  async validateUser(email: string) {
    const user = await this.usersService.findOne({
      email: email,
    });

    if (user && user.email === email) {
      return true;
    }
    return false;
  }*/

  async register(createRegisterDto: CreateRegisterDto) {
    const user = await this.usersService.findOne({
      email: createRegisterDto.email,
    });

    if (user && user.email === createRegisterDto.email) {
      throw new ConflictException('Choose another email');
    }

    const hash = await bcrypt.hash(createRegisterDto.password, 15);

    createRegisterDto.password = hash;

    return await this.usersService.create(createRegisterDto);

    //const payload = this.usersService.create(createRegisterDto);
    //const payload = { firstName: createRegisterDto.firstName };
    //const payload = { firstName: user.firstName };
    //return payload;
  }

  create(createAuthenticationDto: CreateAuthenticationDto) {
    return 'This action adds a new authentication';
  }

  findAll() {
    return `This action returns all authentication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authentication`;
  }

  update(id: number, updateAuthenticationDto: UpdateAuthenticationDto) {
    return `This action updates a #${id} authentication`;
  }

  remove(id: number) {
    return `This action removes a #${id} authentication`;
  }
}
