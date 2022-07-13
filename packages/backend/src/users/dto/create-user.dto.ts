import { AutoMap } from '@automapper/classes';

export class CreateUserDto {
	@AutoMap()
		username: string;

	@AutoMap()
		password: string;
}
