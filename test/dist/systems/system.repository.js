"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClauseRepository = exports.SystemRepository = void 0;
const typeorm_1 = require("typeorm");
const system_entity_1 = require("./system.entity");
const clauses_entity_1 = require("./clauses.entity");
let SystemRepository = class SystemRepository extends typeorm_1.Repository {
    async getTasks(filterDto) {
        const query = this.createQueryBuilder('system');
        const system = await query.getMany();
        return system;
    }
    async createTask(createTaskDto) {
        const { SYSTEMNAME, SYSTEMDESCRIPTION, STATUS, CREATE_USER, UPDATE_USER } = createTaskDto;
        const system = this.create({
            SYSTEMNAME,
            SYSTEMDESCRIPTION,
            STATUS,
            CREATE_USER,
            UPDATE_USER,
        });
        await this.save(system);
        return system;
    }
};
SystemRepository = __decorate([
    (0, typeorm_1.EntityRepository)(system_entity_1.System)
], SystemRepository);
exports.SystemRepository = SystemRepository;
let ClauseRepository = class ClauseRepository extends typeorm_1.Repository {
    async getTasks(filterDto) {
        const query = this.createQueryBuilder('clause');
        const system = await query.getMany();
        return system;
    }
    async createTask(createTaskDto) {
        const { CLAUSE_NUMBER, CLAUSE_DESCRIPTION, STATUS, CREATE_USER, UPDATE_USER, SYSTEMID, CLAUSE_TITLE } = createTaskDto;
        const system = this.create({
            CLAUSE_NUMBER,
            CLAUSE_DESCRIPTION,
            STATUS,
            SYSTEMID,
            CREATE_USER,
            UPDATE_USER,
            CLAUSE_TITLE
        });
        await this.save(system);
        return system;
    }
};
ClauseRepository = __decorate([
    (0, typeorm_1.EntityRepository)(clauses_entity_1.Clause)
], ClauseRepository);
exports.ClauseRepository = ClauseRepository;
//# sourceMappingURL=system.repository.js.map