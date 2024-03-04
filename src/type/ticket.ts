import type OrderItem from "./OrderItem";
import type PackageDetail from "./PackageDetail";

export default interface Ticket {
    id?: number;
    name?: string;
    price?: number;
    type?: string;
    images?: string;
    createdDate?: Date;
    updatedDate?: Date;
    deletedDate?: Date;
    orderItems?: OrderItem[];
    package_detail?: PackageDetail[];
}