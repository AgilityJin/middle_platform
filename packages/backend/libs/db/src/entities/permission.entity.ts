import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

/**
 * @name 权限表
 *
 * @export
 * @class Permission
 */
@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn()
  id: number // 键

  @Column({
    unique: true,
  })
  key: string // 权限所对应的字符, 逻辑上校验 Permissions

  @Column()
  name: string // 权限名称

  @Column({
    nullable: true
  })
  parentKey?: string // 父权限存在时 所属父权限key值 逻辑上校验 Permissions

  @Column({
    nullable: true
  })
  description?: string // 权限描述

  @CreateDateColumn({
    select: false
  })
  createTime: string

  @UpdateDateColumn({
    select: false
  })
  updateTime: string
}
