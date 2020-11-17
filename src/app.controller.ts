// 建立好策略之後，建立這個檔案
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'// 這是AuthGuard自動配置的
@Controller()
export class AppController{
  @UseGuards(AuthGuard('local')) //  Passport local strategy 有一個預設名稱: local,在UseGuards中使用
  @Post('auth/login')
  async login(@Request() req) {
    return req.user
  }
}