import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { GraphQLModule } from '@nestjs/graphql'
import {MongooseModule} from '@nestjs/mongoose'
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/school'),
    // resolver設定好(lesson.module.ts providers)，就會在對應路由產生 schema.gql
    GraphQLModule.forRoot({
    autoSchemaFile: './src/schema/schema.gql' // code first
  }),TasksModule, LessonModule],
})
export class AppModule {}

