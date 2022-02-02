import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDTO {
  @ApiProperty({ example: 'Alex', description: 'name' })
  readonly name: string;

  @ApiProperty({ example: 'AlexLogin', description: 'login' })
  readonly login: string;

  @ApiProperty({ example: '12345', description: 'password' })
  readonly password: string;
}
