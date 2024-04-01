import { HttpStatus, Injectable } from '@nestjs/common';
import { Categories, CategoriesDTO } from './categories.entity';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: MongoRepository<Categories>,
  ) {}

  async getAllCategories() {
    return await this.categoriesRepository.find();
  }

  async generateCategoryId() {
    const existingCategory = await this.categoriesRepository.findOne({
      order: { categoryId: 'DESC' },
    });
    if (existingCategory) {
      return existingCategory.categoryId + 1;
    } else {
      return 1;
    }
  }
  async createCategory(category: Categories) {
    return this.categoriesRepository.save(category);
  }

  async deleteCategory(id: any) {
    const existingCategory = await this.categoriesRepository.findOneBy({
      categoryId: parseInt(id),
    });
    if (existingCategory) {
      await this.categoriesRepository.remove(existingCategory);
      return {
        message: 'Category delete successfully.'
      };
    } else {
      return { message: 'Failed to delete product' };
    }
  }

  async updateCategory(id: any, data: CategoriesDTO) {
    const category = await this.categoriesRepository.findOneBy({
      where: { categoryId: parseInt(id) },
    });
    if (!category) {
      return {
        message: 'CategoryId not available',
        result: [],
      };
    }
    Object.assign(category, data);
    let UpdatedCategory = await this.categoriesRepository.save(category);
    return {
      message: 'Category update successfully',
      result: UpdatedCategory,
    };
  }
}
