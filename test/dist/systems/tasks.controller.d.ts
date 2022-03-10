import { SystemService, ClauseService } from './tasks.service';
import { CreateTaskDto, ClauseDto } from './system_Dto/create-system-dto';
import { UpdateSystemDto, UpdateClauseDto } from './system_Dto/system.update.dto';
import { System } from './system.entity';
import { Clause } from './clauses.entity';
import { GetTasksFilterDto } from './system_Dto/get-system-filter.dto';
export declare class SystemsController {
    private tasksService;
    constructor(tasksService: SystemService);
    getTasks(filterDto: GetTasksFilterDto): Promise<System[]>;
    getTaskById(id: string): Promise<System>;
    createTask(createTaskDto: CreateTaskDto): Promise<System>;
    deleteTaskById(id: string): Promise<void>;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateSystemDto): Promise<System>;
}
export declare class ClausesController {
    private clauseService;
    constructor(clauseService: ClauseService);
    getTasks(filterDto: GetTasksFilterDto): Promise<Clause[]>;
    getTaskById(id: string): Promise<Clause>;
    createTask(clauseTaskDto: ClauseDto): Promise<Clause>;
    deleteTaskById(id: string): Promise<void>;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateClauseDto): Promise<Clause>;
}
