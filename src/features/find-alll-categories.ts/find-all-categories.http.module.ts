import { Body, Controller, Get, Post } from '@nestjs/common';
import { Category } from 'src/core/models/category';
import { SubcategoryEntity } from 'src/datasource/category/entities/subcategory.entity';
import { FindAllCategoriesUseCase } from './find-all-categories.use-case';

@Controller('products')
export class FindAllCategoriesHttpController {
  constructor(
    private readonly findAllCategoryUseCase: FindAllCategoriesUseCase,
  ) {}

  @Get('')
  async execute(): Promise<Category[]> {
    return await this.findAllCategoryUseCase.execute();
  }

  @Post('subcategory')
  async createSubcategory(
    @Body() subcategory: SubcategoryEntity,
  ): Promise<void> {
    await this.findAllCategoryUseCase.save(subcategory);
  }
}
