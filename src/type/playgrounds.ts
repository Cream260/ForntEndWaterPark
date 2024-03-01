import type WristbandDetail from "./wristband_details";

export default interface Playground {
  id?: number;
  name?: string;
  type?: string;
  status?: string;
  installDate?: Date;
  price?: number;
  condition?: string;
  images?: string;
  createdDate?: Date;
  updatedDate?: Date;
  deletedDate?: Date;
  wristband_detail?: WristbandDetail[];
}