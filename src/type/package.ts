import type PackageDetail from "./PackageDetail";
import type Order from "./order";

export default interface Package {
  id?: number;
  name?: string;
  price?: number;
  qty?: number;
  images?: string;
  createdDate?: Date;
  updatedDate?: Date;
  deletedDate?: Date;
  package_detail?: PackageDetail[];
  orders?: Order[];
}