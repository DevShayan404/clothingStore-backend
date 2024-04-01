import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MastersModule } from './masters/masters.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MastersModule,
    TypeOrmModule.forRoot({
      // type: 'mongodb',
      // url: 'mongodb://127.0.0.1:27017/clothingStore',
      // entities: [__dirname + '/**/*.entity.ts'],
      // synchronize: true,

      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      database: 'clothingStore',
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
