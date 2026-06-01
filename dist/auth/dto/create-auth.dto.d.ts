import { UserRole } from '../../../generated/prisma/client';
export declare class RegisterDto {
    username: string;
    email: string;
    password: string;
    role: UserRole;
}
export declare class LoginDto {
    email: string;
    password: string;
}
