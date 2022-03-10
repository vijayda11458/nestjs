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
  import { Logger } from '@nestjs/common';
  import { title } from 'process';
  import { CreateTaskDto,ClauseDto } from './system_Dto/create-system-dto';
  import { UpdateSystemDto,UpdateClauseDto } from './system_Dto/system.update.dto';
  import { System1 } from './system.entity';
  import { Clause1 } from './clauses.entity';
  import { GetTasksFilterDto } from './system_Dto/get-system-filter.dto';
  


@Controller('/Clauses')
export class ClausesController {
  static getClausesById(id: string): any {
    throw new Error('Method not implemented.');
  }
//   static getClausesById(): any {
//     throw new Error('Method not implemented.');
//   }
  
  constructor(private clauseService: ClauseService) {}
  @Get()
  getClauses(@Query() filterDto:GetTasksFilterDto): Promise<Clause1[]> {
    return this.clauseService.getTasks(filterDto);
  }
  @Get(':id')
  getClausesById(@Param('id')id:string):Promise<Clause1>{
    return this.clauseService.getTaskById(id);
  }
 
  @Post()
  createClauses(@Body() clauseTaskDto:ClauseDto,@Body('CSYSTEMID') SYSTEMID:number):Promise<Clause1>{
    Logger.log(SYSTEMID)
    return this.clauseService.createTask(clauseTaskDto,SYSTEMID);
    
  }
 
  @Delete('/:id')
  deleteClausesById(@Param('id') id: string): Promise<void> {
    return this.clauseService.deleteTaskById(id);
  }
  @Patch('/:id')
  updateClausesStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto:UpdateClauseDto,
  ): Promise<Clause1> {
    return this.clauseService.updateTaskStatus(id, updateTaskStatusDto);
  }
}
