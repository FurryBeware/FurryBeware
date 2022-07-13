import { createMap, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto, GetUserPrivDto } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersProfile extends AutomapperProfile {
	constructor(@InjectMapper() mapper: Mapper) {
		super(mapper);
	}


	override get profile() {
		return (mapper) => {
			createMap(mapper, User, GetUserDto);
			createMap(mapper, User, CreateUserDto);
			createMap(mapper, User, UpdateUserDto);
			createMap(mapper, User, GetUserPrivDto);
		};
	}
}
