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
            role: import("../generated/prisma/enums").UserRole;
        };
    }>;
    findAllKasir(): Promise<{
        username: string;
        email: string;
        role: import("../generated/prisma/enums").UserRole;
        createdAt: Date;
        id: number;
    }[]>;
    deleteUser(id: number): Promise<{
        message: string;
    }>;
}
