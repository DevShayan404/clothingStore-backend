import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Categories, CategoriesDTO } from './categories.entity';

@Controller('categories')
@ApiTags('Categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}

  @Get('GetAllCategories')
  async getAllCategories() {
    return await this.categoryService.getAllCategories();
  }
  @Post('CreateCategory')
  @ApiOperation({ summary: 'create a new category' })
  @ApiBody({ type: CategoriesDTO })
  async createCategory(@Body() category: Categories) {
    category.categoryId = await this.categoryService.generateCategoryId();
    const newCategory = await this.categoryService.createCategory(category);
    // return newCategory;
    return {
      message: 'Category add successfully.',
      result: newCategory,
    };
  }
  @Put('UpdateCategory/:id')
  @ApiBody({ type: CategoriesDTO })
  async updateCategory(@Param('id') id: number, @Body() data: CategoriesDTO) {
    // return this.categoryService.updateCategory({
    //   categoryId: id,
    //   ...data,
    return this.categoryService.updateCategory(id, data);
  }

  @Delete('DeleteCategory/:id')
  deleteCategory(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }
}
