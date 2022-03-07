import { EntityRepository,Repository } from "typeorm";
import { GetTasksFilterDto } from "./system_Dto/get-system-filter.dto";
import { System} from "./system.entity";
import { Clause } from "./clauses.entity";


@EntityRepository(System)
export class SystemRepository extends Repository<System>{
async getTasks(filterDto:GetTasksFilterDto):Promise<System[]>{
    const query = this.createQueryBuilder('system');
    const system = await query.getMany();
    return system
}


    
    async createTask(createTaskDto):Promise<System>{
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

@EntityRepository(Clause)
export class ClauseRepository extends Repository<Clause>{
async getTasks(filterDto:GetTasksFilterDto):Promise<Clause[]>{
    const query = this.createQueryBuilder('clause');
    const system = await query.getMany();
    return system
}


    
    async createTask(createTaskDto):Promise<Clause>{
        const {CLAUSE_NUMBER,CLAUSE_DESCRIPTION,STATUS,CREATE_USER,UPDATE_USER,SYSTEMID,CLAUSE_TITLE} = createTaskDto;
        const system = this.create({
            CLAUSE_NUMBER,
            CLAUSE_DESCRIPTION,
           STATUS,
            SYSTEMID,
           CREATE_USER,
           UPDATE_USER,
           CLAUSE_TITLE
        })
        await this.save(system)
      
        return system
}
}