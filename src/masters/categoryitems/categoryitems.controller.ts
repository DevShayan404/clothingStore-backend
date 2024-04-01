import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CategoryitemsService } from './categoryitems.service';
import { Categoryitems, CategoryitemsDTO } from './categoryitems.entity';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('categoryitems')
@ApiTags('Category Item')
export class CategoryitemsController {
  constructor(private service: CategoryitemsService) {}

  @Post('CreateCategoryItem')
  @ApiOperation({ summary: 'create a new category Item' })
  @ApiBody({ type: CategoryitemsDTO })
  async createCategoryItem(@Body() body: Categoryitems) {
    body.categoryItemId = await this.service.generateCategoryId();
    const newCategory = await this.service.createCategoryItem(body);
    // return newCategory;
    return {
      statusCode: HttpStatus.OK,
      message: 'Category Item add successfully.',
      result: newCategory,
    };
  }

  @Get('GetAllCategoryItems')
  async getAllCategoryItems() {
    return await this.service.getAllCategoryItems();
  }

  @Get('GetCategoryList')
  async getCategoryList() {
    return await this.service.getCategoryList();
  }

  @Delete('DeleteCategoryItem/:id')
  async deleteCategoryItem(@Param('id') id: number) {
    return this.service.deleteCategoryItem(id);
  }
}
