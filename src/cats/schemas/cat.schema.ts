import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema() // 架構定義
export class Cat extends Document {
  @Prop()
  name: string;

  @Prop()
  id: number;

  @Prop()
  age: number;
}
export const CatSchema = SchemaFactory.createForClass(Cat);
