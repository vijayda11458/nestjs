import { Repository } from "typeorm";
import { GetTasksFilterDto } from "./system_Dto/get-system-filter.dto";
import { System } from "./system.entity";
export declare class TasksRepository extends Repository<System> {
    getTasks(filterDto: GetTasksFilterDto): Promise<System[]>;
    createTask(createTaskDto: any): Promise<System>;
}
