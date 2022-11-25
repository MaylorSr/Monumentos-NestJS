import {
  Body,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Monumento } from 'src/monumento/monumento.entity';
import { BaseService } from './service.commons';

export abstract class BaseController<T> {
  abstract getService(): BaseService<T>;

  @Get('all')
  async findAll(): Promise<T[]> {
    return await this.getService().findAll();
  }

  @Get('find/:id')
  @HttpCode(HttpStatus.OK)
  getOneMonumento(@Param() params): any {
    return this.getService().findOneMonumento(params.id);
  }

  @Post('save')
  @HttpCode(HttpStatus.CREATED)
  async save(@Body() entity: T): Promise<T> {
    return await this.getService().save(entity);
  }

  @Post('delete/:id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: any) {
    return this.getService().deleteMonumento(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  updateMonumento(@Body() monumentoModel: Monumento, @Param() params): any {
    return this.getService().upDateMonumento(params.id, monumentoModel);
  }
}
