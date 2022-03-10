import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemsController } from './tasks.controller';
import { ClausesController } from './clauses.controller';
import { SystemRepository,ClauseRepository } from './system.repository';
import { SystemService, ClauseService } from './tasks.service';

@Module({
  imports:[TypeOrmModule.forFeature([SystemRepository]),TypeOrmModule.forFeature([ClauseRepository])],
  controllers: [SystemsController,ClausesController],
  providers: [SystemService,ClauseService],
  exports:[TypeOrmModule.forFeature([SystemRepository]),TypeOrmModule.forFeature([ClauseRepository])]
})
export class TasksModule {}


