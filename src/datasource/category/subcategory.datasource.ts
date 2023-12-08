import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubcategoryEntity } from './entities/subcategory.entity';

@Injectable()
export class SubcategoryRepository {
  constructor(
    @InjectModel(SubcategoryEntity.name)
    private readonly subcategoryRepository: Model<SubcategoryEntity>,
  ) {}

  async findByCategoryId(categoryId: string): Promise<SubcategoryEntity[]> {
    return await this.subcategoryRepository
      .find({ categoryId: categoryId })
      .populate({
        path: 'products',
        select: '-__v -createdAt -updatedAt',
      });
  }

  async create(category: SubcategoryEntity): Promise<void> {
    await this.subcategoryRepository.create(category);
  }
}
