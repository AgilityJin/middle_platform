
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

export interface IQuery {
    findUser(id: number): Author | Promise<Author>;
}
