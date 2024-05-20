import { Context, Hono } from "https://deno.land/x/hono@v4.3.7/mod.ts";
import { createRoom } from "./src/room.ts";

const app = new Hono();

app.get("/", (c: Context) => {
  return c.text("Hello Hono!");
});

app.get("/rooms/create", async (c: Context) => {
  const roomName = c.req.param("name");
  const response = await createRoom(roomName);
  return c.json(response);
});

Deno.serve(app.fetch);
