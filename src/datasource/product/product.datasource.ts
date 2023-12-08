import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductEntity, ProductSchema } from './entities/product.entity';
import { ProductRepository } from './product.repository.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductEntity.name, schema: ProductSchema },
    ]),
  ],
  providers: [ProductRepository],
  exports: [ProductRepository],
})
export class ProductDatasourceModule {}
