import { Controller, Put } from '@nestjs/common';
import { Category } from 'src/core/models/category';
import { UpdateCategoryDto } from './update-category.dto';
import { UpdateCategoryUseCase } from './update-category.use-case';

@Controller('category')
export class UpdateCategoryHttpController {
  constructor(private readonly updateCategoryUsecase: UpdateCategoryUseCase) {}

  @Put('')
  async execute(categoryDto: UpdateCategoryDto): Promise<Category> {
    return await this.updateCategoryUsecase.execute(categoryDto);
  }
}
