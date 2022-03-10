"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tasks_controller_1 = require("./tasks.controller");
const system_repository_1 = require("./system.repository");
const tasks_service_1 = require("./tasks.service");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([system_repository_1.SystemRepository]), typeorm_1.TypeOrmModule.forFeature([system_repository_1.ClauseRepository])],
        controllers: [tasks_controller_1.SystemsController, tasks_controller_1.ClausesController],
        providers: [tasks_service_1.SystemService, tasks_service_1.ClauseService]
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=system.module.js.map