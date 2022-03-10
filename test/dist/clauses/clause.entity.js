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
var Clause_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clause = void 0;
const typeorm_1 = require("typeorm");
let Clause = Clause_1 = class Clause {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Clause.prototype, "CLAUSE_ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Clause.prototype, "CLAUSE_NUMBER", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clause.prototype, "CLAUSE_DESCRIPTION", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clause.prototype, "STATUS", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], Clause.prototype, "CREATE_TIMESTAMP", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clause.prototype, "CREATE_USER", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], Clause.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clause.prototype, "UPDATE_USER", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clause.prototype, "CLAUSE_TITLE", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => Clause_1),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Clause)
], Clause.prototype, "SYSTEM_ID", void 0);
Clause = Clause_1 = __decorate([
    (0, typeorm_1.Entity)()
], Clause);
exports.Clause = Clause;
//# sourceMappingURL=clause.entity.js.map