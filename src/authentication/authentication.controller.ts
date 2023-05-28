import { Controller, HttpCode, Post, UseGuards, Request } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import {LocalAuthGuard} from './local/local-auth.guard';
import {User} from 'src/users/user.entity';

@Controller('authentication')
	export class AuthenticationController {
	constructor(private readonly authenticationService: AuthenticationService) {}
	@UseGuards(LocalAuthGuard)
	@Post('login')
	@HttpCode(200)
	async login(@Request() req) {
	  const userWithoutPsw: Partial<User> = req.user;
	
	  return this.authenticationService.login(userWithoutPsw);
	}
}
