import { randomUUID } from "crypto";
import { WebSocket } from "ws";

export function generateRoomId({ length = 9 }: { length: number }): string {
  const pass = Array.from({ length: length }, () => {
    String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }).join("");

  return pass;
}

export function generateUserId(ws: WebSocket) {
  return randomUUID();

  // Add logic to map client socket and user id
}
