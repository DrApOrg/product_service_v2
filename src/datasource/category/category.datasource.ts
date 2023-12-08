import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/core/models/category';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(CategoryEntity.name)
    private readonly categoryRepository: Model<CategoryEntity>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async findBy(query: any): Promise<Category> {
    return await this.categoryRepository.findOne(query);
  }

  async create(categoryEntity: CategoryEntity): Promise<void> {
    await this.categoryRepository.create(categoryEntity);
  }

  async update(categoryEntity: CategoryEntity): Promise<void> {
    await this.categoryRepository.updateOne(
      { _id: categoryEntity._id },
      categoryEntity,
    );
  }
}
