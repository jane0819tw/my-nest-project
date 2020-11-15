import {Resolver,Query} from '@nestjs/graphql'
import { LessonType } from './lesson.type';

@Resolver(of=>LessonType)
export class LessonResolver {

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
}