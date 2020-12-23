
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Gender {
    MAN = "MAN",
    WOMAN = "WOMAN",
    SECRECY = "SECRECY"
}

export interface CreateUser {
    account: string;
    password?: string;
    phone?: string;
    name?: string;
    nickname?: string;
    gender?: Gender;
    age?: number;
    email?: string;
    roles?: number[];
}

export interface Response {
    code: number;
}

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
    account?: string;
    password?: string;
    phone?: string;
    name?: string;
    gender?: Gender;
    age?: number;
    email?: string;
    roles?: number[];
}

export interface IQuery {
    findUser(id: number): Author | Promise<Author>;
    getUsers(page?: number, size?: number): User[] | Promise<User[]>;
}

export interface IMutation {
    create(user: CreateUser): User | Promise<User>;
}

export interface ResultUser {
    code?: number;
    message?: string;
    data?: User[];
}

export type MAN = any;
export type WOMAN = any;
export type SECRECY = any;
