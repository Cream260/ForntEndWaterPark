import type OrderItem from "./OrderItem";
import type Promotion from "./promotion";
import type Package from "./package"
import type Customer from "./customer"
import type Wristband from "./wristbands";

export default interface Order {
  id?: number;
  qty: number;
  totalPrice: number;
  netPrice: number;
  numPeople?: number | null; 
  nameComp?: string | null; 
  discount: number;
  received: number;
  payments: string;
  startDate?: Date;
  expDate?: Date;
  cusID: number;
  promoId?: number;
  eventId?: number;
  packageId?: number;
  orderItems: OrderItem[];
}