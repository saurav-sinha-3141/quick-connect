import { WebSocket } from "ws";

export default function sendSystemMessage(ws: WebSocket, payload: any) {
  ws.send(
    JSON.stringify({
      type: "system",
      payload,
      timestamp: new Date().toISOString(),
    })
  );
}
