import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorRegisterController } from './vendor-register/vendor-register.controller';
import { VendorRegisterService } from './vendor-register/vendor-register.service';
import { VendorRegister } from './vendor-register/vendor-register.entity';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { Categories } from './categories/categories.entity';
import { CategoryitemsService } from './categoryitems/categoryitems.service';
import { Categoryitems } from './categoryitems/categoryitems.entity';
import { CategoryitemsController } from './categoryitems/categoryitems.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([VendorRegister, Categories, Categoryitems]),
  ],
  providers: [VendorRegisterService, CategoriesService, CategoryitemsService],
  controllers: [
    VendorRegisterController,
    CategoriesController,
    CategoryitemsController,
  ],
})
export class MastersModule {}
