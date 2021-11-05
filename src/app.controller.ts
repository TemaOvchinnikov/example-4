import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticationService } from './authentication/authentication.service';
import { CreateAuthenticationDto } from './authentication/dto/create-authentication.dto';

@Controller()
export class AppController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('/login')
  async login(@Request() req) {
    return this.authenticationService.login();
  }

  @Post('/register')
  async register(@Body() createAuthenticationDto: CreateAuthenticationDto) {
    return this.authenticationService.register(createAuthenticationDto);
  }
}
