import { ulid } from "https://deno.land/x/ulid@v0.3.0/mod.ts";

const kv = await Deno.openKv("kv.sqlite");

// UIDと部屋名のペアをKVSに登録する
export const createRoom = async (roomName: string) => {
  const uid = ulid();
  console.log(uid);
  const res = await kv.set([uid], roomName);

  return res;
};
