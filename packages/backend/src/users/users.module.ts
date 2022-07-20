import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersProfile } from './users.profile';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	exports: [TypeOrmModule],
	controllers: [UsersController],
	providers: [UsersService, UsersProfile],
})
export class UsersModule { }
