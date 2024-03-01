import type Order from "./order";
import type Ticket from "./ticket";

export default interface OrderItem {
  id?: number;
  name?: string;
  type?: string;
  price?: number;
  totalPrice?: number;
  qty?: number;
  createdDate?: Date;
  updatedDate?: Date;
  deletedDate?: Date;
  orders?: Order;
  ticket?: Ticket;
}