import type Customer from "./customer";

export default interface User {
    id?: number;
    email: string;
    username: string;
    password: string;
    name: string;
    tel:string;
    role:string;
    customer:Customer;
  }