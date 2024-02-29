export default interface Event {
    id?: number;
    name: string;
    images: string;
    price: number;
    type: string;
    createdDate?: Date;
    updatedDate?: Date;
    deletedDate ?: Date;

}