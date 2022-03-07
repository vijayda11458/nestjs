import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { SystemService,ClauseService } from './tasks.service';

import { title } from 'process';
import { CreateTaskDto,ClauseDto } from './system_Dto/create-system-dto';
import { UpdateSystemDto,UpdateClauseDto } from './system_Dto/system.update.dto';
import { System } from './system.entity';
import { Clause } from './clauses.entity';
import { GetTasksFilterDto } from './system_Dto/get-system-filter.dto';


@Controller('systems')
export class SystemsController {
  constructor(private tasksService: SystemService) {}
  @Get()
  getTasks(@Query() filterDto:GetTasksFilterDto): Promise<System[]> {
    return this.tasksService.getTasks(filterDto);
  }
  @Get(':id')
  getTaskById(@Param('id')id:string):Promise<System>{
    return this.tasksService.getTaskById(id);
  }
 
  @Post()
  createTask(@Body() createTaskDto:CreateTaskDto):Promise<System>{
    return this.tasksService.createTask(createTaskDto);
  }
 
  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTaskById(id);
  }
  @Patch('/:id')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto:UpdateSystemDto,
  ): Promise<System> {
    return this.tasksService.updateTaskStatus(id, updateTaskStatusDto);
  }
}

@Controller('/Clauses')
export class ClausesController {
  constructor(private clauseService: ClauseService) {}
  @Get()
  getTasks(@Query() filterDto:GetTasksFilterDto): Promise<Clause[]> {
    return this.clauseService.getTasks(filterDto);
  }
  @Get(':id')
  getTaskById(@Param('id')id:string):Promise<Clause>{
    return this.clauseService.getTaskById(id);
  }
 
  @Post()
  createTask(@Body() clauseTaskDto:ClauseDto):Promise<Clause>{
    return this.clauseService.createTask(clauseTaskDto);
  }
 
  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): Promise<void> {
    return this.clauseService.deleteTaskById(id);
  }
  @Patch('/:id')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto:UpdateClauseDto,
  ): Promise<Clause> {
    return this.clauseService.updateTaskStatus(id, updateTaskStatusDto);
  }
}
