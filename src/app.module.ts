import { Module } from '@nestjs/common';
import 'dotenv/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';

// import { RolesModule } from './roles/roles.module';
// import { Role } from './roles/roles.model';
// import { UserRoles } from './roles/user-roles.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      // envFilePath: `.${process.env.NODE_ENV}.env`,
      // envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nodejs2021Q4Service',
      models: [User],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
