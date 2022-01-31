import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

// import { Role } from '../roles/roles.model';
// import { UserRoles } from '../roles/user-roles.model';

interface UserCreationAttrs {
  name: string;
  login: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({
    example: 'c828512d-b2df-4bb0-a5e4-1f70150ac792',
    description: 'UUID4',
  })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4(),
    primaryKey: true,
  })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Alex', description: 'name' })
  @Column({ type: DataType.STRING, allowNull: false })
  @Expose()
  name: string;

  @ApiProperty({ example: 'Alexlogin', description: 'login' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  @Expose()
  login: string;

  @ApiProperty({ example: '12345678', description: 'password' })
  @Column({ type: DataType.STRING, allowNull: false })
  @Exclude()
  password: string;
}

// @BelongsToMany(() => Role, () => UserRoles)
// roles: Role[];
