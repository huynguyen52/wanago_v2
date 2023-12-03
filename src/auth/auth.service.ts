import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserOutput } from 'src/users/user-output.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(username: string, password: string): Promise<UserOutput> {
    const user = await this.userService.findOne(username);
    if (user && user.password === password) {
      const { password, ...rest } = user;
      return rest;
    }
    throw new UnauthorizedException();
  }
}
