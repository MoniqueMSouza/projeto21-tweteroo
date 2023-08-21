import { HttpException, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
import { SignUpUserDTO } from './dto/user.dto';
import { CreateTweetDTO } from './dto/tweet.dto';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor() {
    this.users = [];
    this.tweets = [];
 
  }

  getHealth(): string {
    return "I'm okay!";
  }

  signUp(body: SignUpUserDTO) {
    const user = new User(body.username, body.avatar);
    return this.users.push(user);
  }

  createTweet(body: CreateTweetDTO) {
    const user: User = this.users.find(user => user.username === body.username);
    if(!user) {
      throw new HttpException('User not found!', 401);
    }

    const tweet = new Tweet(user, body.tweet);
    return this.tweets.push(tweet);
  }
}