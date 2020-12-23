import { UserGender } from "@common/configure"
import { ACCOUNT_MAX_LENGTH, ACCOUNT_MIN_LENGTH, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH, PHONE_MIN_LENGTH, PHONE_MAX_LENGTH, USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH, NICKNAME_MIN_LENGTH, NICKNAME_MAX_LENGTH } from '@common/configure/length-limit';
import { IsEmail, IsInt, IsMobilePhone, MaxLength, MinLength } from 'class-validator';

export class UserCreateDto {
  @MinLength(ACCOUNT_MIN_LENGTH)
  @MaxLength(ACCOUNT_MAX_LENGTH)
  account: string

  @MinLength(PASSWORD_MIN_LENGTH)
  @MaxLength(PASSWORD_MAX_LENGTH)
  password?: string

  @IsMobilePhone()
  @MinLength(PHONE_MIN_LENGTH)
  @MaxLength(PHONE_MAX_LENGTH)
  phone?: string

  @MinLength(USERNAME_MIN_LENGTH)
  @MaxLength(USERNAME_MAX_LENGTH)
  name?: string

  @MinLength(NICKNAME_MIN_LENGTH)
  @MaxLength(NICKNAME_MAX_LENGTH)
  nickname?: string
  gender?: UserGender

  @IsInt()
  age?: number

  @IsEmail()
  email?: string
  roleId?: number
}
