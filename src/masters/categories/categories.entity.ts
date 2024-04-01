import { Entity, Column, ObjectId, ObjectIdColumn, Generated } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('categories')
export class Categories {
  @ObjectIdColumn() id: ObjectId;
  @Column()
  categoryId: number;
  @Column()
  categoryName: string;
  @Column()
  src: string;
  @Column()
  vendorId: number;
}
export class CategoriesDTO {
  @ApiProperty() categoryName: string;
  @ApiProperty() src: string;
  @ApiProperty() vendorId: number;
}
