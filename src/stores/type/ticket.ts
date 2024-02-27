export default interface Ticket {
    id?: number;
    name: string;
    price: number;
    type: string;
    createdDate?: Date;
    updatedDate?: Date;
    deletedDate ?: Date;

}