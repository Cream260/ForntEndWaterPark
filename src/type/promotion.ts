import type Order from "./order";

export default interface Promotion {
    id?: number;
    name?: string;
    code?: string;
    startDate?: Date;
    endDate?: Date;
    discount?: number;
    images?: string;
    createdDate?: Date;
    updatedDate?: Date;
    deletedDate?: Date;
    orders?: Order[];
}