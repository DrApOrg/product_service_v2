import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Subcategory } from 'src/core/models/category';
import { ProductEntity } from 'src/datasource/product/entities/product.entity';

@Schema({ collection: 'subcategories' })
export class SubcategoryEntity implements Omit<Subcategory, 'products'> {
  _id?: string;

  @Prop({ type: String })
  categoryId: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  image: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: ProductEntity.name }])
  products: ProductEntity[];
}

export const SubcategorySchema =
  SchemaFactory.createForClass(SubcategoryEntity);
