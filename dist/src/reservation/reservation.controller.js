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
exports.ReservationController = void 0;
const common_1 = require("@nestjs/common");
const reservation_service_1 = require("./reservation.service");
const create_reservation_dto_1 = require("./dto/create-reservation.dto");
const update_reservation_dto_1 = require("./dto/update-reservation.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
let ReservationController = class ReservationController {
    reservationService;
    constructor(reservationService) {
        this.reservationService = reservationService;
    }
    create(dto, req) {
        return this.reservationService.create(dto, req.user.id);
    }
    findAll() {
        return this.reservationService.findAll();
    }
    findByName(name) {
        return this.reservationService.findByName(name);
    }
    findByDate(date) {
        return this.reservationService.findByDate(date);
    }
    findOne(id) {
        return this.reservationService.findOne(id);
    }
    update(id, dto) {
        return this.reservationService.update(id, dto);
    }
    remove(id) {
        return this.reservationService.remove(id);
    }
};
exports.ReservationController = ReservationController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('KASIR', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Buat reservasi baru (Kasir/Admin)' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reservation_dto_1.CreateReservationDto, Object]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('KASIR', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Get semua reservasi (Kasir/Admin)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, roles_decorator_1.Roles)('KASIR', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Cari reservasi by nama customer (Kasir/Admin)' }),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)('by-date'),
    (0, roles_decorator_1.Roles)('KASIR', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Get reservasi by tanggal (Kasir/Admin)' }),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "findByDate", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('KASIR', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Get reservasi by ID (Kasir/Admin)' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)('KASIR', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Update reservasi (Kasir/Admin)' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_reservation_dto_1.UpdateReservationDto]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Hapus reservasi (Admin only)' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "remove", null);
exports.ReservationController = ReservationController = __decorate([
    (0, swagger_1.ApiTags)('Reservation'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('reservation'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [reservation_service_1.ReservationService])
], ReservationController);
//# sourceMappingURL=reservation.controller.js.map