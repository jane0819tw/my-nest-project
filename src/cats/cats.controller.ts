import {
  Controller,
  Get,
  Req,
  Post,
  Body,
  HttpCode,
  Header,
  Redirect,
  Query,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  /* 基本款 */
  @Get()
  findAll() {
    return [];
  }

  /*重新導向的設定*/
  @Get('test1')
  @Redirect('https://nestjs.com', 301)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return {
        url: 'https://www.google.com/',
      };
    }
  }
  /*加上路由變數 */
  @Get('/:id')
  findOne(@Req() request: Request): object {
    return request.params;
  }
  /*測試Post功能*/
  @Post('test1')
  create(): string {
    return 'this action adds a new cat';
  }

  /*測試Post 加上其他裝飾器*/
  @Post('test2')
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  create2(): string {
    return 'this action adds a new cat';
  }

  /*Post 透過 DTO來傳遞對象,放在Body中 */
  @Post('test3')
  create3(@Body() createCatDto: CreateCatDto) {
    return `this action add a new cat. name: ${createCatDto.name}`;
  }
}
