import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CreateTaskDto } from './system_Dto/create-system-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemRepository,ClauseRepository} from './system.repository';
import { GetTasksFilterDto } from './system_Dto/get-system-filter.dto';
import { System } from './system.entity';
import { Clause } from './clauses.entity';
import {UpdateSystemDto,UpdateClauseDto} from'./system_Dto/system.update.dto';
@Injectable()
export class SystemService {
    constructor(
    @InjectRepository(SystemRepository)
    private tasksRepository:SystemRepository,){}
// getAllTasks():Task[]{
//     return this.tasks;
// }
createTask(createTaskDto):Promise<System>{
  return this.tasksRepository.createTask(createTaskDto);
}
getTasks(filterDto:GetTasksFilterDto): Promise<System[]>{
return this.tasksRepository.getTasks(filterDto);
}



async getTaskById(id:string):Promise<System>{
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
async updateTaskStatus(id:string,status:UpdateSystemDto):Promise<System>{
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
createTask(createTaskDto):Promise<Clause>{
  return this.tasksRepository.createTask(createTaskDto);
}
getTasks(filterDto:GetTasksFilterDto): Promise<Clause[]>{
return this.tasksRepository.getTasks(filterDto);
}



async getTaskById(id:string):Promise<Clause>{
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
async updateTaskStatus(id:string,status:UpdateClauseDto):Promise<Clause>{
    const task = await this.getTaskById(id);
   await this.tasksRepository.save(task)
    return task;
}
}


