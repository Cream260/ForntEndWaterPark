export default interface OrderItem {
  id?: number;
  name: string;
  ticketId: number;
  type: string;
  price: number;
  totalPrice: number;
  qty: number;
}