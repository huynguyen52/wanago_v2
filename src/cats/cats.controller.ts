import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catServices: CatsService) {}
  @Get()
  getAllCats() {
    return this.catServices.getAllCats();
  }
}
