import { TasksRepository } from './system.repository';
import { GetTasksFilterDto } from './system_Dto/get-system-filter.dto';
import { System } from './system.entity';
import { UpdateSystemDto } from './system_Dto/system.update.dto';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    createTask(createTaskDto: any): Promise<System>;
    getTasks(filterDto: GetTasksFilterDto): Promise<System[]>;
    getTaskById(id: string): Promise<System>;
    deleteTaskById(id: string): Promise<void>;
    updateTaskStatus(id: string, status: UpdateSystemDto): Promise<System>;
}
