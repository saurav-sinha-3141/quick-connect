import { WebSocket } from "ws";

export default function registerCreateRoom(ws: WebSocket, user_id: string) {
  ws.on("message", (msg) => {
    // validate msg
    // generate room id
    // send room id
  });
}
