import { AutoMap } from '@automapper/classes';

export class UpdateUserDto {
	@AutoMap()
		username: string;
}
