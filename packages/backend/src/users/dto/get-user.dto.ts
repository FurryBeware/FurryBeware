import { AutoMap } from '@automapper/classes';
import { IsNotEmpty } from 'class-validator';

export class GetUserDto {
	@AutoMap()
		id: string;

	@AutoMap()
	@IsNotEmpty()
		username: string;
}

export class GetUserPrivDto extends GetUserDto {
	@AutoMap()
	@IsNotEmpty()
		password: string;
}
