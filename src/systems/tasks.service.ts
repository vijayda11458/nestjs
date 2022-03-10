import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CreateTaskDto } from './system_Dto/create-system-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemRepository,ClauseRepository} from './system.repository';
import { GetTasksFilterDto } from './system_Dto/get-system-filter.dto';
import { System1 } from './system.entity';
import { Clause1 } from './clauses.entity';
import {UpdateSystemDto,UpdateClauseDto} from'./system_Dto/system.update.dto';
import { identity } from 'rxjs';
import { Raw,Equal, Any } from 'typeorm';
import { serialize } from 'class-transformer';
import util from 'util';

import { Alias } from 'typeorm/query-builder/Alias';
import { count } from 'console';
@Injectable()
export class SystemService {
    result: any;
    constructor(
    @InjectRepository(SystemRepository)
    private tasksRepository:SystemRepository,){}
// getAllTasks():Task[]{
//     return this.tasks;
// }
createTask(createTaskDto):Promise<System1>{
  return this.tasksRepository.createTask(createTaskDto);
}



async getTasks(filterDto:GetTasksFilterDto): Promise<any>{

return(this.tasksRepository.createQueryBuilder('system')
    .leftJoin("system.clauses","clause")
    .select([
       "system.SYSTEMID",
       "system.SYSTEMDESCRIPTION",
       "system.STATUS",
       "system.CREATE_USER",
       "system.UPDATE_USER",
       'clause.CLAUSE_NUMBER',
       'clause.CLAUSE_DESCRIPTION',
       'clause.CSYSTEMID',
       'clause.STATUS',
       'clause.CREATE_USER',
       'clause.UPDATE_USER',
       'clause.CLAUSE_TITLE'
    ])
    .where("system.SYSTEMID=:id",{id})
    // .andWhere("clause.CSYSTEMID=:id,{id:id}")
    .getMany()
    )
}

 

async getTaskById(id:string):Promise<any>{

    return(this.tasksRepository.createQueryBuilder('system')
    .leftJoin("system.clauses","clause")
    .select([
       "system.SYSTEMID",
       "system.SYSTEMDESCRIPTION",
       "system.STATUS",
       "system.CREATE_USER",
       "system.UPDATE_USER",
       'clause.CLAUSE_NUMBER',
       'clause.CLAUSE_DESCRIPTION',
       'clause.CSYSTEMID',
       'clause.STATUS',
       'clause.CREATE_USER',
       'clause.UPDATE_USER',
       'clause.CLAUSE_TITLE'
    ])
    .where("system.SYSTEMID=:id",{id})
    // .andWhere("clause.CSYSTEMID=:id,{id:id}")
    .getOne()
    )
}


async deleteTaskById(id:string):Promise<void>{
   const result =await this.tasksRepository.delete(id);

if(result.affected === 0){
    throw new NotFoundException(`this id"${id}" is not found`)
}
}
async updateTaskStatus(id:string,status:UpdateSystemDto):Promise<System1>{
    const task = await this.getTaskById(id);
   await this.tasksRepository.save(task)
    return task;
}
}


export class ClauseService {
    constructor(
    @InjectRepository(ClauseRepository)
    private tasksRepository:ClauseRepository,){}
// getAllTasks():Task[]{
//     return this.tasks;
// }
createTask(createTaskDto,SYSTEMID):Promise<Clause1>{
  return this.tasksRepository.createTask(createTaskDto,SYSTEMID);
}
getTasks(filterDto:GetTasksFilterDto): Promise<Clause1[]>{
return this.tasksRepository.getTasks(filterDto);
}



async getTaskById(id:string):Promise<any>{
    const found = await this.tasksRepository.findOne(id);
 
    if(!found){
        throw new NotFoundException(`Task with ID"${id}" not found`);
        }
    return found;
   
}


async deleteTaskById(id:string):Promise<void>{
   const result =await this.tasksRepository.delete(id);

if(result.affected === 0){
    throw new NotFoundException(`this id"${id}" is not found`)
}
}
async updateTaskStatus(id:string,status:UpdateClauseDto):Promise<Clause1>{
    const task = await this.getTaskById(id);
   await this.tasksRepository.save(task)
    return task;
}
}


