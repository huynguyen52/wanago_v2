import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { AppController } from './app.controller';

@Module({
  imports: [UsersModule, AuthModule, LoginModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
