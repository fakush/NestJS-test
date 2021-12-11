import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { productosDto } from './dto/productos.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel('Producto')
    private readonly productsModel: Model<productosDto>,
  ) {}

  async getAllProducts(): Promise<productosDto[]> {
    return await this.productsModel.find().exec();
  }

  async createProduct(producto: productosDto): Promise<productosDto> {
    const newProduct = new this.productsModel(producto);
    return await newProduct.save();
    // return this.productsModel.create(producto);
  }

  async updateProduct(
    idProduct: string,
    producto: productosDto,
  ): Promise<productosDto> {
    return await this.productsModel.findByIdAndUpdate(idProduct, producto, {
      new: true,
    });
  }

  async deleteProduct(id: string): Promise<void> {
    await this.productsModel.findByIdAndDelete(id);
  }
}
