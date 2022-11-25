import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonumentoModule } from './monumento/monumento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'monumento',
      autoLoadEntities: true,
    }),
    MonumentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
