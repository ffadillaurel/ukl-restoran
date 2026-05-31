import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto, LoginDto } from './dto/create-auth.dto';
import { UserRole } from '../generated/prisma/client';
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
            role: UserRole;
        };
    }>;
    findAllKasir(): Promise<{
        username: string;
        email: string;
        role: UserRole;
        createdAt: Date;
        id: number;
    }[]>;
    deleteUser(id: number): Promise<{
        message: string;
    }>;
}
