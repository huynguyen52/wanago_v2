import { Controller, Get } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';

@Controller('cat')
export class CatController {
  constructor(private postServices: PostsService) {}
  @Get()
  getAllPosts() {
    return this.postServices.getAllPost();
  }
}
