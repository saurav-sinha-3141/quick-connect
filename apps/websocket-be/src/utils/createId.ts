import { randomUUID } from "crypto";
import { WebSocket } from "ws";
import { user_sockets } from "../state.js";

export function generateRoomId({ length = 9 }: { length: number }): string {
  const pass = Array.from({ length: length }, () => {
    String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }).join("");

  return pass;
}

export function generateUserId(ws: WebSocket): string {
  const user_id = randomUUID();
  user_sockets.set(user_id, ws);

  return user_id;
}
