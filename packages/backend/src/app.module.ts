import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import configuration from './config/configuration';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration],
			isGlobal: true,
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get('database.host'),
				port: configService.get('database.port'),
				database: configService.get('database.database'),
				username: configService.get('database.username'),
				password: configService.get('database.password'),
				synchronize: true,
				autoLoadEntities: true,
				logging: true,
				logger: 'advanced-console',
			}),
		}),
		UsersModule,
	],
})
export class AppModule { }
