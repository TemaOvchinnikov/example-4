import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication/authentication.service';
import { CreateRegisterDto } from './authentication/dto/create-register.dto';
import { LocalAuthGuard } from './authentication/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authenticationService.login();
  }

  //@UseGuards(LocalAuthGuard)
  @Post('/register')
  async register(@Body() createRegisterDto: CreateRegisterDto) {
    return this.authenticationService.register(createRegisterDto);
  }
}
