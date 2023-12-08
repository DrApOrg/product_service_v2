import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryRepository } from './category.datasource';
import { CategoryEntity, CategorySchema } from './entities/category.entity';
import {
  SubcategoryEntity,
  SubcategorySchema,
} from './entities/subcategory.entity';
import { SubcategoryRepository } from './subcategory.datasource';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CategoryEntity.name, schema: CategorySchema },
      { name: SubcategoryEntity.name, schema: SubcategorySchema },
    ]),
  ],
  providers: [CategoryRepository, SubcategoryRepository],
  exports: [CategoryRepository, SubcategoryRepository],
})
export class CategoryDatasourceModule {}
