import { UserGender } from '@common/configure';
import { ACCOUNT_MAX_LENGTH, ACCOUNT_MIN_LENGTH, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH, PHONE_MIN_LENGTH, PHONE_MAX_LENGTH, USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH, NICKNAME_MIN_LENGTH, NICKNAME_MAX_LENGTH } from '@common/configure/length-limit';
import { IsEmail, IsInt, IsMobilePhone, MaxLength, MinLength } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Index,
} from 'typeorm';
import { Role } from './role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Generated('uuid')
  @Column({
    readonly: true,
  })
  uuid: string;

  @MinLength(ACCOUNT_MIN_LENGTH)
  @MaxLength(ACCOUNT_MAX_LENGTH)
  @Column({
    unique: true,
    readonly: true,
    select: false,
  })
  account: string; // 登录账号 merchant unique

  @MinLength(PASSWORD_MIN_LENGTH)
  @MaxLength(PASSWORD_MAX_LENGTH)
  @Column({
    nullable: true,
    select: false,
  })
  password?: string; // 密码

  @IsMobilePhone()
  @MinLength(PHONE_MIN_LENGTH)
  @MaxLength(PHONE_MAX_LENGTH)
  @Column({
    nullable: true,
    select: false,
  })
  phone?: string; // 手机 merchant unique

  @MinLength(USERNAME_MIN_LENGTH)
  @MaxLength(USERNAME_MAX_LENGTH)
  @Column({
    nullable: true,
    select: false,
  })
  name?: string; // 真实姓名

  @MinLength(NICKNAME_MIN_LENGTH)
  @MaxLength(NICKNAME_MAX_LENGTH)
  @Column({
    nullable: true,
  })
  nickname?: string; // 昵称

  @Column({
    type: 'enum',
    enum: UserGender,
    nullable: true,
  })
  gender?: UserGender; // 性别

  @IsInt()
  @Column({
    nullable: true,
    select: false,
  })
  age?: number; // 年龄

  @IsEmail()
  @Column({
    nullable: true,
  })
  email?: string; // 邮箱

  @Column({
    type: 'boolean',
    default: true,
  })
  enabled: boolean; // 启用状态

  @CreateDateColumn({
    select: false
  })
  createTime: string; // 创建时间

  @UpdateDateColumn({
    select: false
  })
  updateTime: string; // 更新时间

  @Column({
    type: 'datetime',
    nullable: true,
  })
  lastLoginTime?: string; // 最后登录时间

  @ManyToOne(
    type => Role,
    role => role.id,
    { onDelete: 'CASCADE' },
  )
  role: Role[]; // 角色
}
