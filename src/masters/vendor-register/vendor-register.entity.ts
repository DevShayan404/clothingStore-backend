import {
    Entity,
    Column,
    ObjectId,
    ObjectIdColumn,
  } from 'typeorm';
  import { ApiProperty } from '@nestjs/swagger';
  
@Entity('UserRegistor')
export class VendorRegister {
    @ObjectIdColumn() id: ObjectId;
}