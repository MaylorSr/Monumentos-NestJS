import { Controller } from '@nestjs/common';
import { BaseController } from 'src/commons/controller.commons';
import { BaseService } from 'src/commons/service.commons';
import { MonumentoService } from 'src/services/monumento.service';
import { Monumento } from '../monumento.entity';

@Controller('api/monumento')
export class MonumentoController extends BaseController<Monumento> {
  constructor(private readonly monumentoService: MonumentoService) {
    super();
  }

  getService(): BaseService<Monumento> {
    return this.monumentoService;
  }
}
