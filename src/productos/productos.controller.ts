import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { productosDto } from './dto/productos.dto';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  getAllProducts(): Promise<productosDto[]> {
    return this.productosService.getAllProducts();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createProduct(@Body() producto: productosDto): Promise<productosDto> {
    return this.productosService.createProduct(producto);
  }

  @Put(':id')
  updateProduct(
    @Param('id') idProduct: string,
    @Body() producto: productosDto,
  ): Promise<productosDto> {
    return this.productosService.updateProduct(idProduct, producto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') idProduct: string): Promise<void> {
    return this.productosService.deleteProduct(idProduct);
  }
}
