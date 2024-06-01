import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSerieDTO } from './dto/create-series';
import { SeriesService } from './series.service';
import { UpdateSerieDTO } from './dto/update-series-dto';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Post()
  crearSerie(@Body() serieDTO: CreateSerieDTO) {
    return this.seriesService.insertar(serieDTO);
  }

  @Get()
  obtenerSeries() {
    return this.seriesService.obtener();
  }

  @Get(':id')
  obtenerSeriePorId(@Param('id') id: number) {
    return this.seriesService.obtenerSerieID(id);
  }

  @Patch(':id')
  actualizarSerie(@Param('id') id: number, @Body() serieDTO: UpdateSerieDTO) {
    return this.seriesService.actualizar(id, serieDTO);
  }

  @Delete(':id')
  eliminarSerie(@Param('id') id: number) {
    return this.seriesService.eliminar(id);
  }
}
