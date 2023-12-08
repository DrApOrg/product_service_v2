import { Module } from '@nestjs/common';
import { CategoryDatasourceModule } from 'src/datasource/category/category.datasource.module';
import { ProductDatasourceModule } from 'src/datasource/product/product.datasource';
import { FindAllCategoriesHttpController } from './find-all-categories.http.module';
import { FindAllCategoriesUseCase } from './find-all-categories.use-case';

@Module({
  imports: [CategoryDatasourceModule, ProductDatasourceModule],
  controllers: [FindAllCategoriesHttpController],
  providers: [FindAllCategoriesUseCase],
})
export class FindAllCategoriesModule {}
