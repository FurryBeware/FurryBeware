import { AutoMap } from '@automapper/classes';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
	@PrimaryColumn({ type: 'uuid' })
	@AutoMap()
		id: string;

	@Column()
	@AutoMap()
		username: string;

	@Column()
	@AutoMap()
		password: string;
}
