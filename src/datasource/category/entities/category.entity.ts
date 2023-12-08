import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Category } from 'src/core/models/category';

@Schema({ collection: 'categories' })
export class CategoryEntity implements Omit<Category, 'subcategories'> {
  _id?: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  image: string;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryEntity);
