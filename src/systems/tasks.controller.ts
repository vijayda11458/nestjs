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
import { SystemService} from './tasks.service';

import { title } from 'process';
import { CreateTaskDto } from './system_Dto/create-system-dto';
import { UpdateSystemDto } from './system_Dto/system.update.dto';
import { System1 } from './system.entity';
import { Clause1 } from './clauses.entity';
import { GetTasksFilterDto } from './system_Dto/get-system-filter.dto';
import {ClausesController} from '../systems/clauses.controller'

ClausesController
@Controller('systems')
export class SystemsController {
  constructor(private tasksService: SystemService) {}
  @Get()
  getTasks(@Query() filterDto:GetTasksFilterDto): any {
    return (this.tasksService.getTasks(filterDto));
  }

  
  @Get(':id')
  getTaskById(@Param('id')id:string):any{
   return(this.tasksService.getTaskById(id))
  }
 
  @Post()
  createTask(@Body() createTaskDto:CreateTaskDto):Promise<System1>{
    
    return this.tasksService.createTask(createTaskDto);
    console.log(createTaskDto)
  }
 
  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTaskById(id);
  }
  @Patch('/:id')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto:UpdateSystemDto,
  ): Promise<System1> {
    return this.tasksService.updateTaskStatus(id, updateTaskStatusDto);
  }
}

