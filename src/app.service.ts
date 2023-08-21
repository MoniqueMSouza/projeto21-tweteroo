import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { SignUpUserDTO } from './dto/user.dto';

@Injectable()
export class AppService {
  private users: User[];

  constructor() {
    this.users = [];
  }

  getHealth(): string {
    return "I'm okay!";
  }

  signUp(body: SignUpUserDTO) {
    const user = new User(body.username, body.avatar);
    return this.users.push(user);
  }


}