import { WebSocketServer } from "ws";
import registerConnectionHandler from "./handlers/connection.js";

const PORT = 8080;

export const wss = new WebSocketServer({ port: PORT });

wss.on("listening", () => {
  console.log(
    `
    Chat Server STARTED at
    [${new Date().toISOString()}] UTC Time.
    Listening on port ${PORT}
    `
  );
});

wss.on("connection", (ws) => {
  registerConnectionHandler(ws, wss);
});

process.on("SIGTERM", () => {
  console.log(`
    Chat Server CLOSED (Render SIGTERM) at
    [${new Date().toISOString()}] UTC Time.
  `);

  wss.close(() => {
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log(`
    Chat Server CLOSED (Render SIGINT) at
    [${new Date().toISOString()}] UTC Time.
  `);

  wss.close(() => {
    process.exit(0);
  });
});
