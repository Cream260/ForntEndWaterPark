import type Order from "./order";

export default interface Customer {
    id?: number;
    username?: string;
    password?: string;
    name?: string;
    email?: string;
    tel?: string;
    createdDate?: Date;
    updatedDate?: Date;
    deletedDate?: Date;
    orders?: Order[];
}