import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCategoryDto) {
    const exists = await this.prisma.category.findUnique({ where: { name: dto.name } });
    if (exists) throw new ConflictException('Kategori sudah ada');
    return this.prisma.category.create({ data: dto });
  }

  async findAll() {
    return this.prisma.category.findMany({ include: { menus: true } });
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findUnique({ where: { id }, include: { menus: true } });
    if (!category) throw new NotFoundException('Kategori tidak ditemukan');
    return category;
  }

  async update(id: number, dto: UpdateCategoryDto) {
    await this.findOne(id);
    return this.prisma.category.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    const menuCount = await this.prisma.menu.count({ where: { categoryId: id } });
    if (menuCount > 0) throw new ConflictException('Kategori tidak bisa dihapus karena masih memiliki menu');
    await this.prisma.category.delete({ where: { id } });
    return { message: 'Kategori berhasil dihapus' };
  }
}