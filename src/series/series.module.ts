import { Module } from '@nestjs/common';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';
import { Serie } from './entities/entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Serie])],
  controllers: [SeriesController],
  providers: [SeriesService],
})
export class SeriesModule {}
