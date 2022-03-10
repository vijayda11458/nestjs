import { Repository } from "typeorm";
import { GetTasksFilterDto } from "./clauses_Dto/get-system-filter.dto";
import { Clause } from "./clause.entity";
export declare class TasksRepository extends Repository<Clause> {
    getTasks(filterDto: GetTasksFilterDto): Promise<Clause[]>;
    createTask(createTaskDto: any): Promise<Clause>;
}
