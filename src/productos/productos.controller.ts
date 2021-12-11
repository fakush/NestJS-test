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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { productosDto } from './dto/productos.dto';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  @ApiOperation({ summary: 'Get all products in the database' })
  @ApiResponse({
    status: 200,
    description: 'The found products',
    type: productosDto,
  })
  getAllProducts(): Promise<productosDto[]> {
    return this.productosService.getAllProducts();
  }

  @Post()
  @ApiOperation({ summary: 'Add product in the database' })
  @UsePipes(ValidationPipe)
  createProduct(@Body() producto: productosDto): Promise<productosDto> {
    return this.productosService.createProduct(producto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update product in the database' })
  updateProduct(
    @Param('id') idProduct: string,
    @Body() producto: productosDto,
  ): Promise<productosDto> {
    return this.productosService.updateProduct(idProduct, producto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product in the database' })
  deleteProduct(@Param('id') idProduct: string): Promise<void> {
    return this.productosService.deleteProduct(idProduct);
  }
}
