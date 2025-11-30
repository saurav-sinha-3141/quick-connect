export interface User {
  user_id: string;
  username: string;
  room_id: string;
}

export interface Room {
  room_id: string;
  members: Set<string>;
}

export const users = new Map<string, User>();

export const rooms = new Map<string, Room>();

// Add map of client socket and user_id