import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'typeorm';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(ProductEntity.name)
    private readonly productRepository: Model<ProductEntity>,
  ) {}

  async findById(id: string): Promise<ProductEntity> {
    return await this.productRepository.findOne({
      _id: new ObjectId(id),
    });
  }
}
