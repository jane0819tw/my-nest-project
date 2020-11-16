import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {LessonType,LessonSchema} from './lesson.type'
import { LessonService } from './lesson.service';
@Module({
  // 設定好resolver, schema才會出來
  imports:[MongooseModule.forFeature([{name:'Lesson',schema:LessonSchema}])],
  providers:[LessonResolver, LessonService]
})
export class LessonModule {}

