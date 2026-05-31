import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMenuDto, imageUrl: string | null) {
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

  async findOne(id: number) {
    const menu = await this.prisma.menu.findUnique({
      where: { id },
      include: { category: true },
    });
    if (!menu) throw new NotFoundException('Menu tidak ditemukan');
    return menu;
  }

  async search(name: string) {
    return this.prisma.menu.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      include: { category: true },
    });
  }

  async update(id: number, dto: UpdateMenuDto, imageUrl?: string | null) {
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

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.menu.delete({ where: { id } });
    return { message: 'Menu berhasil dihapus' };
  }
}