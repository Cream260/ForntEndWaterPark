import type Playground from "./playgrounds";
import type Wristband from "./wristbands";

export default interface WristbandDetail {
  id: number;
  namePlay: string;
  sum: number;
  rate: number;
  review: string;
  createdDate: Date;
  updatedDate: Date;
  deletedDate: Date;
  wristband: Wristband;
  playground: Playground;
}