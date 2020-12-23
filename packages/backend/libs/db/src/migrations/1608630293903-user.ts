import {MigrationInterface, QueryRunner} from "typeorm";

export class user1608630293903 implements MigrationInterface {
    name = 'user1608630293903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `permissions` (`id` int NOT NULL AUTO_INCREMENT, `key` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `parentKey` varchar(255) NULL, `description` varchar(255) NULL, `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_017943867ed5ceef9c03edd974` (`key`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `roles` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, `isSystem` tinyint NULL DEFAULT 0, `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `uuid` varchar(36) NOT NULL, `account` varchar(255) NOT NULL, `password` varchar(255) NULL, `phone` varchar(255) NULL, `name` varchar(255) NULL, `nickname` varchar(255) NULL, `gender` enum ('1', '0', '-1') NULL, `age` int NULL, `email` varchar(255) NULL, `enabled` tinyint NOT NULL DEFAULT 1, `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastLoginTime` datetime NULL, `roleId` int NULL, INDEX `IDX_951b8f1dfc94ac1d0301a14b7e` (`uuid`), UNIQUE INDEX `IDX_dd44b05034165835d6dcc18d68` (`account`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `roles_permissions_permissions` (`rolesId` int NOT NULL, `permissionsId` int NOT NULL, INDEX `IDX_dc2b9d46195bb3ed28abbf7c9e` (`rolesId`), INDEX `IDX_fd4d5d4c7f7ff16c57549b72c6` (`permissionsId`), PRIMARY KEY (`rolesId`, `permissionsId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_368e146b785b574f42ae9e53d5e` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `roles_permissions_permissions` ADD CONSTRAINT `FK_dc2b9d46195bb3ed28abbf7c9e3` FOREIGN KEY (`rolesId`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `roles_permissions_permissions` ADD CONSTRAINT `FK_fd4d5d4c7f7ff16c57549b72c6f` FOREIGN KEY (`permissionsId`) REFERENCES `permissions`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `roles_permissions_permissions` DROP FOREIGN KEY `FK_fd4d5d4c7f7ff16c57549b72c6f`");
        await queryRunner.query("ALTER TABLE `roles_permissions_permissions` DROP FOREIGN KEY `FK_dc2b9d46195bb3ed28abbf7c9e3`");
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_368e146b785b574f42ae9e53d5e`");
        await queryRunner.query("DROP INDEX `IDX_fd4d5d4c7f7ff16c57549b72c6` ON `roles_permissions_permissions`");
        await queryRunner.query("DROP INDEX `IDX_dc2b9d46195bb3ed28abbf7c9e` ON `roles_permissions_permissions`");
        await queryRunner.query("DROP TABLE `roles_permissions_permissions`");
        await queryRunner.query("DROP INDEX `IDX_dd44b05034165835d6dcc18d68` ON `users`");
        await queryRunner.query("DROP INDEX `IDX_951b8f1dfc94ac1d0301a14b7e` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `roles`");
        await queryRunner.query("DROP INDEX `IDX_017943867ed5ceef9c03edd974` ON `permissions`");
        await queryRunner.query("DROP TABLE `permissions`");
    }

}
