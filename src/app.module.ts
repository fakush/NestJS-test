import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosController } from './productos/productos.controller';
import { ProductosService } from './productos/productos.service';
import { ProductosSchema } from './productos/dto/productos.schema';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_ATLAS_URI),
    MongooseModule.forFeature([{ name: 'Producto', schema: ProductosSchema }]),
  ],
  controllers: [AppController, ProductosController],
  providers: [AppService, ProductosService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    // consumer.apply(loggerMiddleware).forRoutes(ProductosController);
  }
}
