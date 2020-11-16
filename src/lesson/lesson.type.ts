// lesson.type.ts = lesson.module.ts
// 也與mongo的 lesson.schema.ts  共用
// 將schema一起寫在model裡面
import { ObjectType, Field, ID } from "@nestjs/graphql";
// 加上mongoose-對mongoose來說，一切來自schema
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {Document} from "mongoose"
@Schema() // 定義這個class是schema
@ObjectType('lesson') // graphQL的設定
export class LessonType extends Document{
  @Field(type => ID)
  @Prop() // @porp 定義在Document的屬性
  id: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  startDate: string;

  @Field()
  @Prop()
  endDate: string;
}

export const LessonSchema = SchemaFactory.createForClass(LessonType);