import { AutoMap } from '@automapper/classes';

export class GetUserDto {
	@AutoMap()
		id: string;

	@AutoMap()
		username: string;
}
