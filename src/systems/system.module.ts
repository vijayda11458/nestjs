import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClausesController,SystemsController } from './tasks.controller';
import { SystemRepository,ClauseRepository } from './system.repository';
import { SystemService, ClauseService } from './tasks.service';

@Module({
  imports:[TypeOrmModule.forFeature([SystemRepository]),TypeOrmModule.forFeature([ClauseRepository])],
  controllers: [SystemsController,ClausesController],
  providers: [SystemService,ClauseService]
})
export class TasksModule {}


