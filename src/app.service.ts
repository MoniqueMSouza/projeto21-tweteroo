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

  getTweets(page: number) {
    if (page < 1) throw new HttpException('Page must be greater than 0', 400);

    const invertedTweets = this.tweets.reverse();
    const responseArr = [];

    if (page) {
      const tweetsPage = 15;
      const startIndex = (page - 1) * tweetsPage;
      const endIndex = startIndex + tweetsPage;

      for (let i = startIndex; i < endIndex && i < invertedTweets.length; i++) {
        const { user, tweet } = invertedTweets[i];
        const { username, avatar } = user;
        responseArr.push({ username, avatar, tweet });
      }
    } else {
      for (let i = 0; i < invertedTweets.length; i++) {
        const { user, tweet } = invertedTweets[i];
        const { username, avatar } = user;
        responseArr.push({ username, avatar, tweet });
      }
    }

    if (responseArr.length < 10) return responseArr;

    return responseArr.slice(0, 15);
  }
}