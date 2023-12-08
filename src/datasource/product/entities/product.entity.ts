import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from '../../../core/models/product';

@Schema({ collection: 'products' })
export class ProductEntity implements Omit<Product, 'createdAt' | 'updatedAt'> {
  _id?: string;

  @Prop({ type: String })
  supplierId: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: Number })
  price: number;

  @Prop({ type: String })
  image: string;

  @Prop({ type: Number })
  stock: number;

  characteristics: {
    description: string;
    size: number;
    color: string[];
  };

  @Prop({ type: Date })
  createdAt: string;

  @Prop({ type: Date })
  updatedAt: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);
