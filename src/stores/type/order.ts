export default interface Order {
    id?: number;
    name: string;
    type: string;
    price: number;
    totalPrice: number;
    qty: number;
    startDate?: Date;
    endDate?: Date;
    createdDate?: Date;
    updatedDate?: Date;
    deletedDate ?: Date;

}