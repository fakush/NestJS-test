import {
  IsNotEmpty,
  IsAlphanumeric,
  IsArray,
  Length,
  IsNumber,
  IsDate,
} from 'class-validator';

export class productosDto {
  readonly _id: string;

  @IsNotEmpty()
  @Length(1, 50)
  readonly nombre: string;

  @IsNotEmpty()
  @Length(1, 200)
  readonly descripcion: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(1, 25)
  readonly categoria: string;

  @IsNotEmpty()
  @IsNumber()
  readonly precio: number;

  @IsNotEmpty()
  readonly stock: number;

  @IsNotEmpty()
  @IsArray()
  readonly imagenes: any;

  // @IsDate()
  // readonly created_at: Date;

  // @IsDate()
  // readonly updated_at: Date;
}
