"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const clause_repository_1 = require("./clause.repository");
let TasksService = class TasksService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    createTask(createTaskDto) {
        return this.tasksRepository.createTask(createTaskDto);
    }
    getTasks(filterDto) {
        return this.tasksRepository.getTasks(filterDto);
    }
    async getTaskById(id) {
        const found = await this.tasksRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`Task with ID"${id}" not found`);
        }
        return found;
    }
    async deleteTaskById(id) {
        const result = await this.tasksRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`this id"${id}" is not found`);
        }
    }
    async updateTaskStatus(id, status) {
        const task = await this.getTaskById(id);
        await this.tasksRepository.save(task);
        return task;
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(clause_repository_1.TasksRepository)),
    __metadata("design:paramtypes", [typeof (_a = typeof clause_repository_1.TasksRepository !== "undefined" && clause_repository_1.TasksRepository) === "function" ? _a : Object])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=clause.service.js.map