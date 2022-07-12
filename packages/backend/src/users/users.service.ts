import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private usersRepo: Repository<User>) { }

	async create(createUserDto: CreateUserDto): Promise<void> {
		const newUser = new User();

		newUser.id = v4();
		newUser.username = createUserDto.username;
		newUser.password = createUserDto.password;

		await this.usersRepo.save(newUser);
	}

	async findOne(id: string): Promise<GetUserDto> {
		return await this.usersRepo.findOneBy({ id });
	}

	async update(id: string, updateUserDto: UpdateUserDto): Promise<void> {
		await this.usersRepo.update({ id: id }, updateUserDto);
	}

	async remove(id: string): Promise<void> {
		await this.usersRepo.delete({ id });
	}
}
