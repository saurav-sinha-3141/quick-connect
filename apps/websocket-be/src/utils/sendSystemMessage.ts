import { WebSocket } from "ws";

export default function sendSystemMessage(ws: WebSocket, text: any) {
  ws.send(
    JSON.stringify({
      type: "system",
      text,
      timestamp: new Date().toISOString(),
    })
  );
}
