import { Repository } from "typeorm";
import { GetTasksFilterDto } from "./get-tasks-filter.dto";
import { System } from "./task.entity";
export declare class TasksRepository extends Repository<System> {
    getTasks(filterDto: GetTasksFilterDto): Promise<System[]>;
    createTask(createTaskDto: any): Promise<System>;
}
