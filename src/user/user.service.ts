import { Injectable } from '@nestjs/common';
export type User = any;
@Injectable()
export class UserService {
  private readonly users: User[];
  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'apple',
        password: 'apple',
      },
      {
        userId: 2,
        username: 'banana',
        password: 'banana',
      },
      {
        userId: 3,
        username: 'cat',
        password: 'cat',
      },
    ];
  }
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
