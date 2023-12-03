import { Controller, Get, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('login')
export class LoginController {
  @UseGuards(LocalAuthGuard)
  @Get()
  login() {
    return 'hello world';
  }
}
