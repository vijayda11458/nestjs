import { Repository } from "typeorm";
import { GetTasksFilterDto } from "./system_Dto/get-system-filter.dto";
import { System } from "./system.entity";
import { Clause } from "./clauses.entity";
export declare class SystemRepository extends Repository<System> {
    getTasks(filterDto: GetTasksFilterDto): Promise<System[]>;
    createTask(createTaskDto: any): Promise<System>;
}
export declare class ClauseRepository extends Repository<Clause> {
    getTasks(filterDto: GetTasksFilterDto): Promise<Clause[]>;
    createTask(createTaskDto: any): Promise<Clause>;
}
