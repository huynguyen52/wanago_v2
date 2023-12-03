import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { CreatePost } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    private postServices: PostsService,
    private readonly catService: CatsService,
  ) {}
  @Get()
  getAllPosts() {
    return this.postServices.getAllPost();
  }

  @Get('cats')
  getAllCat() {
    return this.catService.getAllCats();
  }

  @Post()
  createPost(@Body() post: CreatePost) {
    console.log(post);
    return this.postServices.createPost(post);
  }
}
