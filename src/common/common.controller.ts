import { Controller, Get } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

@Controller('common')
export class CommonController {
  constructor(private readonly catService: CatsService) {}
  @Get()
  getAllCat() {
    return this.catService.getAllCats();
  }
}
