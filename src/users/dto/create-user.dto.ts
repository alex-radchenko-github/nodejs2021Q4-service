import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Alex', description: 'name' })
  readonly name: string;

  @IsString({ message: 'Must be a string' })
  @ApiProperty({ example: 'AlexLogin', description: 'login' })
  readonly login: string;

  @IsString({ message: 'Must be a string' })
  @Length(1, 20, { message: 'password must be from 3 to 20 letters' })
  @ApiProperty({ example: '12345', description: 'password' })
  readonly password: string;
}
