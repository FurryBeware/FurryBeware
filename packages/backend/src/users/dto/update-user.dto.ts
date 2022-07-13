import { AutoMap } from '@automapper/classes';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
	@AutoMap()
	@IsNotEmpty()
		username: string;
}
