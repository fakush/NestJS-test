import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsAlphanumeric,
  IsArray,
  Length,
  IsNumber,
  IsDate,
} from 'class-validator';

export class productosDto {
  @ApiProperty({
    description: 'Id del producto',
    type: 'String',
    example: '61b4dcddc282e3a2334e1045',
  })
  readonly _id: string;

  @ApiProperty({
    description: 'Nombre del producto',
    type: 'String',
    example: 'Pure de Tomates',
  })
  @IsNotEmpty()
  @Length(1, 50)
  readonly nombre: string;

  @ApiProperty({
    description: 'Descripión del producto',
    type: 'String',
    example: 'Tomates echos pure',
  })
  @IsNotEmpty()
  @Length(1, 200)
  readonly descripcion: string;

  @ApiProperty({
    description: 'Categoría a la que pertenece el producto',
    type: 'String',
    example: 'Almacén',
  })
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(1, 25)
  readonly categoria: string;

  @ApiProperty({
    description: 'Nombre del producto',
    type: 'number',
    example: 50,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly precio: number;

  @ApiProperty({
    description: 'Stock del producto',
    type: 'number',
    example: 50,
  })
  @IsNotEmpty()
  readonly stock: number;

  @ApiProperty({
    description: 'Array de imagenes del producto',
    type: 'array',
    example: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  })
  @IsNotEmpty()
  @IsArray()
  readonly imagenes: any;

  // @IsDate()
  // readonly created_at: Date;

  // @IsDate()
  // readonly updated_at: Date;
}
