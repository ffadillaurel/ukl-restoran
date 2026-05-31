import { UserRole } from '../../../generated/prisma/client';

export class RegisterDto {
  username: string;
  email: string;
  password: string;
  role: UserRole;
}

export class LoginDto {
  email: string;
  password: string;
}