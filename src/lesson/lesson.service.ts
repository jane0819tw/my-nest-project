import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LessonType } from './lesson.type'
import { CreateUserInput } from './inputs/create-user.input'
import { v1 as uuid } from 'uuid';
import {Model} from 'mongoose'
@Injectable()
export class LessonService {
  constructor(@InjectModel('Lesson') private readonly LessonType: Model<LessonType> ){ }

  async findAll(): Promise<LessonType[]>{
    return await this.LessonType.find().exec()
  }

  create(input: CreateUserInput) {
    input['id'] = uuid()
    const lesson = new this.LessonType(input)
    return lesson.save()
  }
}
