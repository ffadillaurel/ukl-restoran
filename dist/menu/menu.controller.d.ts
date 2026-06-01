import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
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
        image: string | null;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
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
        image: string | null;
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
        image: string | null;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(dto: CreateMenuDto, file: Express.Multer.File): Promise<{
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
        image: string | null;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, dto: UpdateMenuDto, file: Express.Multer.File): Promise<{
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
        image: string | null;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
