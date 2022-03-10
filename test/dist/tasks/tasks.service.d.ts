import { TaskStatus } from "./task-status.enum";
import { TasksRepository } from './tasks.repository';
import { GetTasksFilterDto } from './get-tasks-filter.dto';
import { System } from './task.entity';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    createTask(createTaskDto: any): Promise<System>;
    getTasks(filterDto: GetTasksFilterDto): Promise<System[]>;
    getTaskById(id: string): Promise<System>;
    deleteTaskById(id: string): Promise<void>;
    updateTaskStatus(id: string, status: TaskStatus): Promise<System>;
}
