import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Permission } from './permission.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number; // 角色id

  @Column()
  name: string; // 角色名

  @Column({
    nullable: true,
  })
  description?: string; // 角色描述

  @Column({
    default: false,
    nullable: true,
    select: false,
  })
  isSystem: boolean; // 是否为系统角色

  @CreateDateColumn({
    select: false
  })
  createTime: string; // 创建时间

  @UpdateDateColumn({
    select: false
  })
  updateTime: string; // 更新时间

  @ManyToMany(
    type => Permission,
    permission => permission.key,
    { onDelete: 'CASCADE' },
  )
  @JoinTable()
  permissions: Partial<Permission>[]; // 权限组 1/n关系
}
