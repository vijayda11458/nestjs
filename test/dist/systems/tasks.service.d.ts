import { SystemRepository, ClauseRepository } from './system.repository';
import { GetTasksFilterDto } from './system_Dto/get-system-filter.dto';
import { System } from './system.entity';
import { Clause } from './clauses.entity';
import { UpdateSystemDto, UpdateClauseDto } from './system_Dto/system.update.dto';
export declare class SystemService {
    private tasksRepository;
    constructor(tasksRepository: SystemRepository);
    createTask(createTaskDto: any): Promise<System>;
    getTasks(filterDto: GetTasksFilterDto): Promise<System[]>;
    getTaskById(id: string): Promise<System>;
    deleteTaskById(id: string): Promise<void>;
    updateTaskStatus(id: string, status: UpdateSystemDto): Promise<System>;
}
export declare class ClauseService {
    private tasksRepository;
    constructor(tasksRepository: ClauseRepository);
    createTask(createTaskDto: any): Promise<Clause>;
    getTasks(filterDto: GetTasksFilterDto): Promise<Clause[]>;
    getTaskById(id: string): Promise<Clause>;
    deleteTaskById(id: string): Promise<void>;
    updateTaskStatus(id: string, status: UpdateClauseDto): Promise<Clause>;
}
