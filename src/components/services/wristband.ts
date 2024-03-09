import type Wristband from "@/type/wristbands"
import http from "./axios";

function getWristband() {
  return http.get("/wristbands");
}

function updateWristband(id: number, Wristband: Wristband) {
  return http.patch(`/wristbands/${id}`, Wristband);
}

function getWristbandById(id: number) {
  return http.get(`/wristbands/${id}`);
}

function getWristbandQR(id: number) {
  return http.get(`/wristbands/${id}/qr`);
}

function deleteWristband(id: number) {
  return http.delete(`/wristbands/${id}`);
}

export default { getWristband, updateWristband, deleteWristband, getWristbandById,getWristbandQR};
