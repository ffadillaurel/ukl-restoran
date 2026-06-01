import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto, LoginDto } from './dto/create-auth.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
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
