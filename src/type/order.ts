import type OrderItem from "./OrderItem";

export default interface Order {
  id?: number;
  qty?: number;
  totalPrice: number;
  netPrice: number;
  numPeople?: number | null; 
  nameComp?: string | null; 
  discount: number;
  received?: number;
  payments?: string;
  startDate?: Date;
  expDate?: Date;
  cusID?: number;
  promoId?: number;
  eventId?: number;
  packageId?: number;
  orderItems?: OrderItem[];
  event?:Event;
}