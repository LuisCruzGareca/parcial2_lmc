import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Serie } from './entities/entity';
import { CreateSerieDTO } from './dto/create-series';
import { UpdateSerieDTO } from './dto/update-series-dto';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Serie)
    private serieRepository: Repository<Serie>,
  ) {}

  async insertar(serieDTO: CreateSerieDTO) {
    return await this.serieRepository.save({
      titulo: serieDTO.titulo,
      protagonista: serieDTO.protagonista,
      sinopsis: serieDTO.sinopsis,
      director: serieDTO.director,
      temporadas: serieDTO.temporadas,
      fecha_estreno: serieDTO.fecha_estreno,
    });
  }

  async obtener(): Promise<Serie[]> {
    return await this.serieRepository.find();
  }

  async obtenerSerieID(ids: number) {
    return await this.serieRepository.findOneBy({
      id: ids,
    });
  }

  async actualizar(id: number, serieDTO: UpdateSerieDTO) {
    return await this.serieRepository.update(id, {
      titulo: serieDTO.titulo,
      protagonista: serieDTO.protagonista,
      sinopsis: serieDTO.sinopsis,
      director: serieDTO.director,
      temporadas: serieDTO.temporadas,
      fecha_estreno: serieDTO.fecha_estreno,
    });
  }

  async eliminar(id: number) {
    return await this.serieRepository.delete(id);
  }
}
