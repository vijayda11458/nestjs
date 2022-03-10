import { TasksService } from './tasks.service';
import { CreateTaskDto } from './system_Dto/create-system-dto';
import { UpdateSystemDto } from './system_Dto/system.update.dto';
import { System } from './system.entity';
import { GetTasksFilterDto } from './system_Dto/get-system-filter.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetTasksFilterDto): Promise<System[]>;
    getTaskById(id: string): Promise<System>;
    createTask(createTaskDto: CreateTaskDto): Promise<System>;
    deleteTaskById(id: string): Promise<void>;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateSystemDto): Promise<System>;
}
