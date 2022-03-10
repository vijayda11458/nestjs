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
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
const typeorm_1 = require("typeorm");
const clauses_entity_1 = require("./clauses.entity");
let System = class System {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], System.prototype, "SYSTEMID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], System.prototype, "SYSTEMNAME", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], System.prototype, "SYSTEMDESCRIPTION", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], System.prototype, "STATUS", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], System.prototype, "CREATE_TIMESTAMP", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], System.prototype, "CREATE_USER", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], System.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], System.prototype, "UPDATE_USER", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => clauses_entity_1.Clause, clause => clause.sytem, {
        cascade: true
    }),
    __metadata("design:type", Array)
], System.prototype, "clause", void 0);
System = __decorate([
    (0, typeorm_1.Entity)()
], System);
exports.System = System;
//# sourceMappingURL=system.entity.js.map