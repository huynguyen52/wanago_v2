import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { CatsModule } from './cats/cats.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [PostsModule, CatsModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
