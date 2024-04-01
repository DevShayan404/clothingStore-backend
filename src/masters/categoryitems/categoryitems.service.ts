import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoryitems } from './categoryitems.entity';
import { MongoRepository } from 'typeorm';
import { Categories } from '../categories/categories.entity';
import { async } from 'rxjs';

@Injectable()
export class CategoryitemsService {
  constructor(
    @InjectRepository(Categoryitems)
    private CategoryitemsRepository: MongoRepository<Categoryitems>,
    @InjectRepository(Categories)
    private categoryRepo: MongoRepository<Categories>,
  ) {}
  async generateCategoryId() {
    const existingCategory = await this.CategoryitemsRepository.findOne({
      order: { categoryItemId: 'DESC' },
    });
    if (existingCategory) {
      return existingCategory.categoryItemId + 1;
    } else {
      return 1;
    }
  }
  async createCategoryItem(categoryItem: Categoryitems) {
    return await this.CategoryitemsRepository.save(categoryItem);
  }

  async getAllCategoryItems() {
    // return await this.CategoryitemsRepository.find();
    let _categoryItems = await this.CategoryitemsRepository.find(); // Fetch all category items

    // Fetch brand details for each category item
    let _categoryItemsWithBrand = await Promise.all(
      _categoryItems.map(async (item) => {
        let _category = await this.categoryRepo.findOne({
          where: { categoryId: parseInt(item.categoryId.toString()) },
        });
        return {
          ...item,
          categoryName: _category.categoryName,
        };
      }),
    );

    return _categoryItemsWithBrand;
  }

  async getCategoryList() {
    let category = await this.categoryRepo.find();
    let list = await Promise.all(
      category.map(async (item) => {
        return {
          categoryId: item.categoryId,
          categoryName: item.categoryName,
        };
      }),
    );
    return list;
  }

  async deleteCategoryItem(id: number) {
    const categoryItem = await this.CategoryitemsRepository.findOneBy({
      where: { categoryItemId: +id },
    });
    if (categoryItem) {
      await this.CategoryitemsRepository.remove(categoryItem);
      return {
        statusCode: HttpStatus.OK,
        message: 'Category item delete successfully.',
      };
    } else {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Failed to delete .',
      };
    }
  }
}
