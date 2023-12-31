import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FindAllCategoriesModule } from './features/find-alll-categories.ts/find-all-categories.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/tshop'),
    /*
     * features
     */
    FindAllCategoriesModule,
  ],
})
export class AppModule {}
