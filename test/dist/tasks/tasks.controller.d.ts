import { TasksService } from './tasks.service';
import { CreateTaskDto } from './create-task-dto';
import { updateTaskStatusDto } from './update-task-status.dto';
import { System } from './task.entity';
import { GetTasksFilterDto } from './get-tasks-filter.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetTasksFilterDto): Promise<System[]>;
    getTaskById(id: string): Promise<System>;
    createTask(createTaskDto: CreateTaskDto): Promise<System>;
    deleteTaskById(id: string): Promise<void>;
    updateTaskStatus(id: string, updateTaskStatusDto: updateTaskStatusDto): Promise<System>;
}
