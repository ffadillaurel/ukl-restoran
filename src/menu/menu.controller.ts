import {
  Controller, Get, Post, Put, Delete,
  Body, Param, Query, UploadedFile,
  UseInterceptors, UseGuards, ParseIntPipe
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

const multerOptions = {
  storage: diskStorage({
    destination: './uploads/menu',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, `menu-${uniqueSuffix}${extname(file.originalname)}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowed = /\.(jpg|jpeg|png|webp)$/i;
    if (!allowed.test(file.originalname)) {
      return cb(new Error('Only image files allowed!'), false);
    }
    cb(null, true);
  },
  limits: { fileSize: 2 * 1024 * 1024 },
};

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  @Get('search')
  search(@Query('name') name: string) {
    return this.menuService.search(name);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.menuService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  create(
    @Body() dto: CreateMenuDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('DTO received:', dto);
    const imageUrl = file ? `/uploads/menu/${file.filename}` : null;
    return this.menuService.create(dto, imageUrl);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMenuDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = file ? `/uploads/menu/${file.filename}` : undefined;
    return this.menuService.update(id, dto, imageUrl);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.menuService.remove(id);
  }
}