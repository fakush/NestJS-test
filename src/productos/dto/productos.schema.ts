import { Schema } from 'mongoose';
import { productosDto } from './productos.dto';

export const ProductosSchema = new Schema<productosDto>({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  categoria: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  imagenes: { type: Array, required: true },
  //   created_at: { type: Date, default: Date.now },
  //   updated_at: { type: Date, default: Date.now },
});
