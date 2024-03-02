import type Wristband from "@/type/wristbands"
import http from "./axios";

function getWristband() {
  return http.get("/wristbands");
}

function updateWristband(id: number, Wristband: Wristband) {
  return http.patch(`/wristbands/${id}`, Wristband);
}

function deleteWristband(id: number) {
  return http.delete(`/wristbands/${id}`);
}

export default { getWristband, updateWristband, deleteWristband};
