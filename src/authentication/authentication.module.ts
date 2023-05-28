import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';

@Module({
  controllers: [JwtModule.register({
    secret: 'secret',
    signOptions: { expiresIn: '1d' },
  }),AuthenticationController],
  providers: [AuthenticationService]
})
export class AuthenticationModule {}
