import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateSerieDTO {
  @IsNotEmpty({ message: 'El campo título no debe estar vacío' })
  @IsString({ message: 'El campo título debe ser de tipo cadena' })
  @MaxLength(250, {
    message: 'El campo título no debe tener más de 250 caracteres',
  })
  readonly titulo: string;

  @IsNotEmpty({ message: 'El campo protagonista no debe estar vacío' })
  @IsString({ message: 'El campo protagonista debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo protagonista no debe tener más de 100 caracteres',
  })
  readonly protagonista: string;

  @IsNotEmpty({ message: 'El campo sinopsis no debe estar vacío' })
  @IsString({ message: 'El campo sinopsis debe ser de tipo cadena' })
  @MaxLength(5000, {
    message: 'El campo sinopsis no debe tener más de 5000 caracteres',
  })
  readonly sinopsis: string;

  @IsNotEmpty({ message: 'El campo director no debe estar vacío' })
  @IsString({ message: 'El campo director debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo director no debe tener más de 100 caracteres',
  })
  readonly director: string;

  @IsNotEmpty({ message: 'El campo temporadas no debe estar vacío' })
  readonly temporadas: number;

  @IsNotEmpty({ message: 'El campo fecha_estreno no debe estar vacío' })
  readonly fecha_estreno: Date;
}
