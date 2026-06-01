import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        message: string;
        userId: number;
    }>;
    login(dto: LoginDto): Promise<{
        message: string;
        token: string;
        user: {
            id: number;
            username: string;
            email: string;
            role: import("generated/prisma").$Enums.UserRole;
        };
    }>;
    findAllKasir(): Promise<{
        id: number;
        username: string;
        email: string;
        role: import("generated/prisma").$Enums.UserRole;
        createdAt: Date;
    }[]>;
    deleteUser(id: number): Promise<{
        message: string;
    }>;
}
