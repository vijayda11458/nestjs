import { EntityRepository,Repository } from "typeorm";
import { GetTasksFilterDto } from "./system_Dto/get-system-filter.dto";
import { System1} from "./system.entity";
import { Clause1 } from "./clauses.entity";
import { Logger } from "@nestjs/common";


@EntityRepository(System1)
export class SystemRepository extends Repository<System1>{
async getTasks(filterDto:GetTasksFilterDto):Promise<System1[]>{
    const query = this.createQueryBuilder('system');
    const system = await query.getMany();
    // const system1 = System1.find()
    // Logger.log("get id",system1)
    return system
}


    
    async createTask(createTaskDto):Promise<System1>{
        const {SYSTEMNAME,SYSTEMDESCRIPTION,STATUS,CREATE_USER,UPDATE_USER} = createTaskDto;
        const system = this.create({
            SYSTEMNAME,
            SYSTEMDESCRIPTION,
           STATUS,
           CREATE_USER,
           UPDATE_USER,
        })
        await this.save(system)
        return system
}
}

@EntityRepository(Clause1)
export class ClauseRepository extends Repository<Clause1>{
async getTasks(filterDto:GetTasksFilterDto):Promise<Clause1[]>{
    const query = this.createQueryBuilder('clause');
    const system = await query.getMany();
    return system
}


    
    async createTask(createTaskDto,id:Clause1):Promise<Clause1>{
        const {CLAUSE_NUMBER,CLAUSE_DESCRIPTION,STATUS,CREATE_USER,UPDATE_USER,CLAUSE_TITLE,CSYSTEMID,systemSYSTEMID} = createTaskDto;
        const system = this.create({
            CLAUSE_NUMBER,
            CLAUSE_DESCRIPTION,
           STATUS,
        // //    SYSTEMID,
        CSYSTEMID,
        // systemSYSTEMID,
           CREATE_USER,
           UPDATE_USER,
           CLAUSE_TITLE,
        })
        await this.save({CLAUSE_NUMBER,CLAUSE_DESCRIPTION,STATUS,CREATE_USER,UPDATE_USER,CLAUSE_TITLE,CSYSTEMID})
      
        return system
}
}