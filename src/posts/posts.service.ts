import { Injectable } from '@nestjs/common';
import { Post } from 'src/posts/interfaces/post.interface';
import { CreatePost } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  private posts: Post[] = [];
  getAllPost() {
    return this.posts;
  }

  createPost(post: CreatePost) {
    return this.posts.push(post);
  }
}
