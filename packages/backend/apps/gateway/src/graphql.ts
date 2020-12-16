
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Author {
    id?: number;
    firstName?: string;
    lastName?: string;
    posts?: string[];
}

export interface User {
    uuid?: string;
    nickname?: string;
    role?: string;
    lastLoginTime?: number;
}

export interface IQuery {
    findUser(id: number): Author | Promise<Author>;
    getUsers(page?: number, size?: number): User[] | Promise<User[]>;
}
