import { Module } from '@nestjs/common';
import { CategoryDatasourceModule } from 'src/datasource/category/category.datasource.module';
import { ProductDatasourceModule } from 'src/datasource/product/product.datasource';
import { UpdateCategoryHttpController } from './update-category.http.controller';
import { UpdateCategoryUseCase } from './update-category.use-case';

@Module({
  imports: [CategoryDatasourceModule, ProductDatasourceModule],
  controllers: [UpdateCategoryHttpController],
  providers: [UpdateCategoryUseCase],
  exports: [UpdateCategoryUseCase],
})
export class UpdateCategory {}
