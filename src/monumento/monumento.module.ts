import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonumentoService } from 'src/services/monumento.service';
import { MonumentoController } from './controllers/monumento.controller';
import { Monumento } from './monumento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Monumento])],
  providers: [MonumentoService],
  controllers: [MonumentoController],
})
export class MonumentoModule {}
