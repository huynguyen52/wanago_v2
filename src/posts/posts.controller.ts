import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePost } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postServices: PostsService) {}
  @Get()
  getAllPosts() {
    return this.postServices.getAllPost();
  }

  @Post()
  createPost(@Body() post: CreatePost) {
    console.log(post);
    return this.postServices.createPost(post);
  }
}
