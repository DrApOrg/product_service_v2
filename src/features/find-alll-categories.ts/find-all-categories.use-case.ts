import { Injectable } from '@nestjs/common';
import { Category, Subcategory } from 'src/core/models/category';
import { CategoryRepository } from 'src/datasource/category/category.datasource';
import { SubcategoryEntity } from 'src/datasource/category/entities/subcategory.entity';
import { SubcategoryRepository } from 'src/datasource/category/subcategory.datasource';
import { ProductRepository } from 'src/datasource/product/product.repository.module';

@Injectable()
export class FindAllCategoriesUseCase {
  constructor(
    private readonly productDataSource: ProductRepository,
    private readonly categoriesDataSource: CategoryRepository,
    private readonly subcategoriesDataSource: SubcategoryRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesDataSource.findAll();
    const data = await Promise.all(
      categories.map(async (category) => {
        const subcategories =
          await this.subcategoriesDataSource.findByCategoryId(category._id);

        return <Category>{
          _id: category._id,
          description: category.description,
          name: category.name,
          image: category.image,
          subcategories: subcategories as Subcategory[],
        };
      }),
    );
    return data.map((e) => e);
  }

  async save(category: SubcategoryEntity): Promise<void> {
    this.subcategoriesDataSource.create(category);
  }
}
