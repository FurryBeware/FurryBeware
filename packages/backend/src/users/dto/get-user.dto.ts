import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetUserDto {
	@AutoMap()
	@IsUUID('4')
		id: string;

	@AutoMap()
	@IsNotEmpty()
		username: string;
}
