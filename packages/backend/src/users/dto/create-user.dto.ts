import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
	@AutoMap()
	@IsNotEmpty()
		username: string;

	@AutoMap()
	@IsNotEmpty()
	@MinLength(8)
		password: string;
}
