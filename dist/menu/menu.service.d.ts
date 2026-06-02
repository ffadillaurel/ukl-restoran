import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenuService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateMenuDto): Promise<{
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        name: string;
        description: string | null;
        price: number;
        stock: number;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        name: string;
        description: string | null;
        price: number;
        stock: number;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        name: string;
        description: string | null;
        price: number;
        stock: number;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    search(name: string): Promise<({
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        name: string;
        description: string | null;
        price: number;
        stock: number;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    update(id: number, dto: UpdateMenuDto): Promise<{
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        name: string;
        description: string | null;
        price: number;
        stock: number;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
