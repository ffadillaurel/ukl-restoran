import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    findAll(): Promise<({
        category: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        categoryId: number;
    })[]>;
    search(name: string): Promise<({
        category: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        categoryId: number;
    })[]>;
    findOne(id: number): Promise<{
        category: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        categoryId: number;
    }>;
    create(dto: CreateMenuDto): Promise<{
        category: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        categoryId: number;
    }>;
    update(id: number, dto: UpdateMenuDto): Promise<{
        category: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        categoryId: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
