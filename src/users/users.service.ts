import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user';

const mockUsers = [
  {
    id: 1,
    name: 'Alice',
    username: 'alice',
    password: '123456',
  },
  {
    id: 2,
    name: 'Marcus',
    username: 'marcus',
    password: '123456',
  },
];

@Injectable()
export class UsersService {
  private readonly users: User[] = mockUsers;

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((u) => u.username === username);
  }
}
