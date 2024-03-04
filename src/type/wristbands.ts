import type Order from "./order";
import type WristbandDetail from "./wristband_details";

export default interface Wristband {
  id?: number;
  type?: string;
  startDate?: Date;
  endDate?: Date;
  createdDate?: Date;
  updatedDate?: Date;
  deletedDate?: Date;
  wristband_detail?: WristbandDetail[];
  orders?: Order;
}