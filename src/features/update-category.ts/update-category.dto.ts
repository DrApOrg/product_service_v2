import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Category } from 'src/core/models/category';

export class UpdateCategoryDto implements Omit<Category, 'subcategories'> {
  @IsOptional()
  @IsString()
  _id?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsOptional()
  @IsString()
  subcategories?: string[];
}
