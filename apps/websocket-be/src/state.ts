import { WebSocket } from "ws";

export interface User {
  user_id: string;
  username: string;
  room_id: string;
}

export interface Room {
  room_id: string;
  members: Set<string>;
}

export const users = new Map<string, User>(); // user_id -> User

export const rooms = new Map<string, Room>(); // room_id -> Room

export const user_sockets = new Map<string, WebSocket>(); // user_id -> User Socket
