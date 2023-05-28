import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { User } from "../users/user.entity";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthenticationService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {
  }

  async validateUser(email: string, pass: string): Promise<Partial<User>> {
    const user = await this.usersService.findOne(email);
    try {
      // Of course, we should consider encrypting the password
      const isMatch = pass === user.password;
      if (user && isMatch) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
      }
    } catch (e) {
      return null;
    }
  }

  async login(userWithoutPsw: Partial<User>) {
    const payload = {
      email: userWithoutPsw.email,
    };

    return {
      email: payload.email,
      access_token: this.jwtService.sign(payload),
    };
  }
}