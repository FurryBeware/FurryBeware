import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MapInterceptor, MapPipe } from '@automapper/nestjs';
import { User } from './entities/user.entity';
import { GetUserDto, GetUserPrivDto } from './dto/get-user.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) { }

	@Post()
	@UseInterceptors(MapInterceptor(User, CreateUserDto))
	async create(@Body(MapPipe(User, CreateUserDto)) createUserDto: CreateUserDto): Promise<void> {
		return await this.usersService.create(createUserDto);
	}

	@Post('/login')
	@UseInterceptors(MapInterceptor(User, GetUserDto))
	async login(@Body(MapPipe(User, GetUserPrivDto)) getUserPrivDto: GetUserPrivDto): Promise<GetUserDto> {
		return await this.usersService.findOnePriv(getUserPrivDto);
	}

	@Get(':id')
	@UseInterceptors(MapInterceptor(User, GetUserDto))
	async findOne(@Param('id') id: string): Promise<GetUserDto> {
		return await this.usersService.findOne(id);
	}

	@Patch(':id')
	@UseInterceptors(MapInterceptor(User, UpdateUserDto))
	async update(@Param('id') id: string, @Body(MapPipe(User, UpdateUserDto)) updateUserDto: UpdateUserDto): Promise<void> {
		return await this.usersService.update(id, updateUserDto);
	}

	@Delete(':id')
	async remove(@Param('id') id: string): Promise<void> {
		return await this.usersService.remove(id);
	}
}
