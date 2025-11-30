import { WebSocket, WebSocketServer } from "ws";
import { generateUserId } from "../utils/createId.js";
import registerCreateRoom from "./createRoom.js";
import registerJoinRoom from "./joinRoom.js";
import registerLeaveRoom from "./leaveRoom.js";
import registerSendMessage from "./sendMessage.js";
import sendSystemMessage from "../utils/sendSystemMessage.js";

let count = 0;

export default function registerConnectionHandler(
  ws: WebSocket,
  wss: WebSocketServer
) {
  const user_id = generateUserId(ws);

  console.log(
    `
     New Connection!!!
     [${new Date().toISOString()}]
     Total - ${++count}
     `
  );

  sendSystemMessage(ws, "Connected to server");

  registerCreateRoom(ws, user_id);
  registerJoinRoom(ws);
  registerLeaveRoom(ws);
  registerSendMessage(ws);

  wss.on("error", (err) => {
    console.error(err);
    sendSystemMessage(ws, "Some Error Occured");
  });
}
