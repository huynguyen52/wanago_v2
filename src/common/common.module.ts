import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [CommonController],
  providers: [CommonService],
  exports: [CatsModule],
})
export class CommonModule {}
