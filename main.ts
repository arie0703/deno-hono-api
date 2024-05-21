import { Context, Hono } from "https://deno.land/x/hono@v4.3.7/mod.ts";
import {
  createRoom,
  entryRoom,
  getAllRoomData,
} from "./src/controllers/room.ts";

const app = new Hono();

app.get("/", (c: Context) => {
  return c.text("Hello Hono!");
});

app.post("/rooms/create", async (c: Context) => {
  const body = await c.req.json();
  const roomName = body["name"];
  const response = createRoom(roomName);
  return c.json(response);
});

app.get("/rooms", (c: Context) => {
  const response = getAllRoomData();
  return c.json(response);
});

app.post("/rooms/entry", async (c: Context) => {
  const body = await c.req.json();
  const roomId = body["id"];
  const response = entryRoom(roomId);
  return c.json(response);
});

Deno.serve(app.fetch);
