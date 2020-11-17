import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport' // 
import {LocalStrategy} from './local.strategy'// 使用剛剛定義的策略功能
@Module({
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy],
  imports:[UserModule,PassportModule] // 使用UserModule這個模組
})
export class AuthModule {}
