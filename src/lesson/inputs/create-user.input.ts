// 如果 mutation的內容是一個物件，那就可以使用 graphql中的 @InputType()這個裝飾器
import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}