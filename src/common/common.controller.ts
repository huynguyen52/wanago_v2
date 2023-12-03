import { Controller, Get } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';

@Controller('common')
export class CommonController {
  constructor(private postServices: PostsService) {}
  @Get()
  getAllPosts() {
    return this.postServices.getAllPost();
  }
}
