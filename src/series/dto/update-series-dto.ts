import { PartialType } from '@nestjs/swagger';
import { CreateSerieDTO } from './create-series';

export class UpdateSerieDTO extends PartialType(CreateSerieDTO) {}
