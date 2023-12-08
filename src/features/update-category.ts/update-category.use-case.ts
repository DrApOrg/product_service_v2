import { Injectable } from '@nestjs/common';
import { Category } from 'src/core/models/category';
import { CategoryRepository } from 'src/datasource/category/category.datasource';
import { CategoryEntity } from 'src/datasource/category/entities/category.entity';
import { SubcategoryRepository } from 'src/datasource/category/subcategory.datasource';
import { ProductRepository } from 'src/datasource/product/product.repository.module';

@Injectable()
export class UpdateCategoryUseCase {
  constructor(
    private readonly productDatasource: ProductRepository,
    private readonly categoriesDatasource: CategoryRepository,
    private readonly subcategoriesDatasource: SubcategoryRepository,
  ) {}

  async execute(category: CategoryEntity): Promise<Category> {
    const isCategoryExists = await this.categoriesDatasource.findBy({
      name: category.name,
    });
    if (!isCategoryExists) {
      await this.categoriesDatasource.create(category);
      return category;
    }

    await this.categoriesDatasource.update(category);

    const updatedCategory = await this.categoriesDatasource.findBy({
      name: category.name,
    });

    return updatedCategory;
  }
}
