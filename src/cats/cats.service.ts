import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats = [];

  getAllCats() {
    return this.cats;
  }
}
