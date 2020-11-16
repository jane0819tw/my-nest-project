import {Resolver,Query, Mutation, Args} from '@nestjs/graphql'
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';
import {CreateUserInput} from './inputs/create-user.input'
@Resolver(of=>LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {
    
  }
  // 透過Query 定義回傳值的type
  @Query(returns=>LessonType)
  lesson() {
    return {
      id: "testid",
      name: "math",
      startDate: (new Date()).toISOString(),
      endDate: (new Date()).toISOString(),
    }
    
  }

  @Query(() => [LessonType])
  async getLessons() {
    return await this.lessonService.findAll()
  }
  
  @Mutation(() => LessonType)
  async createLesson(@Args('input') input:CreateUserInput) {
    return await this.lessonService.create(input)
  }
}