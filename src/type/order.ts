import type OrderItem from "./OrderItem";
import type Promotion from "./promotion";
import type Package from "./package"
import type Customer from "./customer"
import type Wristband from "./wristbands";

export default interface Order {
  id?: number;
  qty?: number;
  totalPrice?: number;
  netPrice?: number;
  numPeople?: number;
  nameComp?: string;
  discount?: number;
  received?: number;
  payments?: string;
  startDate?: Date;
  expDate?: Date;
  createdDate?: Date;
  updatedDate?: Date;
  deletedDate?: Date;
  wristband?: Wristband[];
  orderItems?: OrderItem[];
  customer?: Customer;
  package: Package;
  event?: Event;
  promotion?: Promotion;
}