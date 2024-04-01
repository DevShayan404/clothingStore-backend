import { Entity, Column, ObjectId, ObjectIdColumn, Generated } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('categoriesItems')
export class Categoryitems {
  @ObjectIdColumn() id: ObjectId;
  @Column()
  categoryItemId: number;
  @Column()
  categoryItemName: string;
  @Column()
  src: string;
  @Column()
  categoryId: number;
  // @Column()
  // categoryName: string;
}
export class CategoryitemsDTO {
  @ApiProperty() categoryItemName: string;
  @ApiProperty() src: string;
  @ApiProperty() categoryId: number;
  // @ApiProperty() categoryName: string;
}
