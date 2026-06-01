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
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MenuService = class MenuService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, imageUrl) {
        return this.prisma.menu.create({
            data: {
                name: dto.name,
                description: dto.description,
                price: dto.price,
                stock: dto.stock,
                categoryId: dto.categoryId,
                image: imageUrl,
            },
            include: { category: true },
        });
    }
    async findAll() {
        return this.prisma.menu.findMany({
            include: { category: true },
        });
    }
    async findOne(id) {
        const menu = await this.prisma.menu.findUnique({
            where: { id },
            include: { category: true },
        });
        if (!menu)
            throw new common_1.NotFoundException('Menu tidak ditemukan');
        return menu;
    }
    async search(name) {
        return this.prisma.menu.findMany({
            where: {
                name: {
                    contains: name,
                },
            },
            include: { category: true },
        });
    }
    async update(id, dto, imageUrl) {
        await this.findOne(id);
        return this.prisma.menu.update({
            where: { id },
            data: {
                ...dto,
                price: dto.price ? Number(dto.price) : undefined,
                stock: dto.stock ? Number(dto.stock) : undefined,
                categoryId: dto.categoryId ? Number(dto.categoryId) : undefined,
                ...(imageUrl !== undefined && { image: imageUrl }),
            },
            include: { category: true },
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.menu.delete({ where: { id } });
        return { message: 'Menu berhasil dihapus' };
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MenuService);
//# sourceMappingURL=menu.service.js.map