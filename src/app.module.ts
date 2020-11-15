import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import {GraphQLModule} from '@nestjs/graphql'
import { LessonModule } from './lesson/lesson.module';
@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: true // code first
  }),TasksModule, LessonModule],
})
export class AppModule {}
