import { TasksRepository } from './clause.repository';
import { GetTasksFilterDto } from './clauses_Dto/get-system-filter.dto';
import { System } from './clause.entity';
import { UpdateSystemDto } from './clauses_Dto/system.update.dto';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    createTask(createTaskDto: any): Promise<System>;
    getTasks(filterDto: GetTasksFilterDto): Promise<System[]>;
    getTaskById(id: string): Promise<System>;
    deleteTaskById(id: string): Promise<void>;
    updateTaskStatus(id: string, status: UpdateSystemDto): Promise<System>;
}
