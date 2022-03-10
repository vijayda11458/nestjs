import { TasksRepository } from './clause.repository';
import { GetTasksFilterDto } from './clauses_Dto/get-system-filter.dto';
import { Clause } from './clause.entity';
import { UpdateSystemDto } from './clauses_Dto/system.update.dto';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    createTask(createTaskDto: any): Promise<Clause>;
    getTasks(filterDto: GetTasksFilterDto): Promise<Clause[]>;
    getTaskById(id: string): Promise<Clause>;
    deleteTaskById(id: string): Promise<void>;
    updateTaskStatus(id: string, status: UpdateSystemDto): Promise<Clause>;
}
