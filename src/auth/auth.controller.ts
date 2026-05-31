import { Controller, Post, Get, Delete, Body, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/create-auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  //@ApiBearerAuth()
  //@UseGuards(JwtAuthGuard, RolesGuard)
  //@Roles('ADMIN')
  //@ApiOperation({ summary: 'Register kasir baru (Admin only)' })
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('kasir')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Get semua kasir (Admin only)' })
  findAllKasir() {
    return this.authService.findAllKasir();
  }

  @Delete('kasir/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Hapus kasir (Admin only)' })
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.authService.deleteUser(id);
  }
}