import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}

/*使用介面方式*/
// import { Cat } from './interfaces/cats.interface';
// @Injectable()
// export class CatsService {
//   private readonly cats: Cat[] = [];
//   create(cat: Cat) {
//     this.cats.push(cat);
//   }
//   findAll(): Cat[] {
//     return this.cats;
//   }
// }
