import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    findAll(): Promise<({
        category: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        price: number;
        stock: number;
        categoryId: number;
        image: string | null;
    })[]>;
    search(name: string): Promise<({
        category: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        price: number;
        stock: number;
        categoryId: number;
        image: string | null;
    })[]>;
    findOne(id: number): Promise<{
        category: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        price: number;
        stock: number;
        categoryId: number;
        image: string | null;
    }>;
    create(dto: CreateMenuDto, file: Express.Multer.File): Promise<{
        category: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        price: number;
        stock: number;
        categoryId: number;
        image: string | null;
    }>;
    update(id: number, dto: UpdateMenuDto, file: Express.Multer.File): Promise<{
        category: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        price: number;
        stock: number;
        categoryId: number;
        image: string | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
