import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { CommonModule } from './common/common.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [PostsModule, CommonModule, CatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
