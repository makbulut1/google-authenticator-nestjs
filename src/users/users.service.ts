import { Injectable, Post } from '@nestjs/common';
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'mehmeterenakbulut@outlook.com',
      username: 'makbulut',
      password: 'password',
      twoFactorAuthenticationSecret: null,
      isTwoFactorAuthenticationEnabled: null,
    },
    {
      userId: 2,
      email: 'samimozcan@outlook.com',
      username: 'saozcan',
      password: 'password',
      twoFactorAuthenticationSecret: null,
      isTwoFactorAuthenticationEnabled: null,
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async setTwoFactorAuthenticationSecret(secret: string, userId: number) {
    this.users.find(user => user.userId === userId).twoFactorAuthenticationSecret = secret;
  }
  
  async turnOnTwoFactorAuthentication(userId: number) {
   const user =  this.users.find(user => user.userId === userId).isTwoFactorAuthenticationEnabled = true;
  }
}
