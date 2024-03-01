import type Ticket from "./ticket";
import type Package from "./package"

export default interface PackageDetail {
  id?: number;
  name?: string;
  type?: string;
  qty?: number;
  createdDate?: Date;
  updatedDate?: Date;
  deletedDate?: Date;
  package?: Package;
  ticket?: Ticket;
}