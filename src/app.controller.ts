import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SignUpUserDTO } from './dto/user.dto';
import { CreateTweetDTO } from './dto/tweet.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth() {
    return this.appService.getHealth();
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.OK)
  signUp(@Body() body: SignUpUserDTO) {
    try {
      return this.appService.signUp(body);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }  
  @Post('tweets')
  createTweet(@Body() body: CreateTweetDTO) {
    try {
      return this.appService.createTweet(body);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  @Get('tweets')
  getTweets(@Query('page') page: number) {
    try {
      return this.appService.getTweets(page);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  @Get('tweets/:username')
  getTweetsByUsername(@Param('username') username: string) {
    try {
      return this.appService.getTweetsByUsername(username);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  }
