import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsRepository {
  private posts = [];
  getAllPost() {
    return this.posts;
  }
}
