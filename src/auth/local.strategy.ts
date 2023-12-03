import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserOutput } from 'src/users/user-output.dto';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super(); // config
  }

  async validate(username: string, password: string): Promise<UserOutput> {
    return this.authService.validateUser(username, password);
  }
}
