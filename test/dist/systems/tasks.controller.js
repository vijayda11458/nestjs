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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClausesController = exports.SystemsController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const create_system_dto_1 = require("./system_Dto/create-system-dto");
const system_update_dto_1 = require("./system_Dto/system.update.dto");
const get_system_filter_dto_1 = require("./system_Dto/get-system-filter.dto");
let SystemsController = class SystemsController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    getTasks(filterDto) {
        return this.tasksService.getTasks(filterDto);
    }
    getTaskById(id) {
        return this.tasksService.getTaskById(id);
    }
    createTask(createTaskDto) {
        return this.tasksService.createTask(createTaskDto);
    }
    deleteTaskById(id) {
        return this.tasksService.deleteTaskById(id);
    }
    updateTaskStatus(id, updateTaskStatusDto) {
        return this.tasksService.updateTaskStatus(id, updateTaskStatusDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_system_filter_dto_1.GetTasksFilterDto]),
    __metadata("design:returntype", Promise)
], SystemsController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SystemsController.prototype, "getTaskById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_system_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], SystemsController.prototype, "createTask", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SystemsController.prototype, "deleteTaskById", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, system_update_dto_1.UpdateSystemDto]),
    __metadata("design:returntype", Promise)
], SystemsController.prototype, "updateTaskStatus", null);
SystemsController = __decorate([
    (0, common_1.Controller)('systems'),
    __metadata("design:paramtypes", [tasks_service_1.SystemService])
], SystemsController);
exports.SystemsController = SystemsController;
let ClausesController = class ClausesController {
    constructor(clauseService) {
        this.clauseService = clauseService;
    }
    getTasks(filterDto) {
        return this.clauseService.getTasks(filterDto);
    }
    getTaskById(id) {
        return this.clauseService.getTaskById(id);
    }
    createTask(clauseTaskDto) {
        return this.clauseService.createTask(clauseTaskDto);
    }
    deleteTaskById(id) {
        return this.clauseService.deleteTaskById(id);
    }
    updateTaskStatus(id, updateTaskStatusDto) {
        return this.clauseService.updateTaskStatus(id, updateTaskStatusDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_system_filter_dto_1.GetTasksFilterDto]),
    __metadata("design:returntype", Promise)
], ClausesController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClausesController.prototype, "getTaskById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_system_dto_1.ClauseDto]),
    __metadata("design:returntype", Promise)
], ClausesController.prototype, "createTask", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClausesController.prototype, "deleteTaskById", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, system_update_dto_1.UpdateClauseDto]),
    __metadata("design:returntype", Promise)
], ClausesController.prototype, "updateTaskStatus", null);
ClausesController = __decorate([
    (0, common_1.Controller)('/Clauses'),
    __metadata("design:paramtypes", [tasks_service_1.ClauseService])
], ClausesController);
exports.ClausesController = ClausesController;
//# sourceMappingURL=tasks.controller.js.map