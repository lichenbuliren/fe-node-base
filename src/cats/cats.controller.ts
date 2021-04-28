import { Controller, Get, Post, Req } from '@nestjs/common'
import { Request } from 'express'

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request) {
    return 'this action returns all cats'
  }

  @Post()
  create() {
    return 'this action add a new cat'
  }

  // 路由通配符；匹配 abvcd, abccd
  @Get('ab*cd')
  getAllCats() {
    return 'this action match "abvcd"、"abccd"'
  }
}
