import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Monumento } from 'src/monumento/monumento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MonumentoService extends BaseService<Monumento> {
  constructor(
    @InjectRepository(Monumento) public monumentoRepo: Repository<Monumento>,
  ) {
    super();
  }

  getRepository(): Repository<Monumento> {
    return this.monumentoRepo;
  }

  
  
}
