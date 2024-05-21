import { RoomData } from "../types/room.ts";
import { ulid } from "https://deno.land/x/ulid@v0.3.0/mod.ts";

export class Room {
  // TODO: 後でデータの永続化をする
  readonly roomData: RoomData[] = [];

  create(name: string) {
    const uid = ulid();
    console.log("Created Room", uid);
    const data = { id: uid, name: name };
    this.roomData.push(data);

    return data;
  }

  findById(id: string) {
    const result = this.roomData.filter((data) => {
      return data.id === id;
    });

    console.log(result);

    return result;
  }

  getAllData() {
    return this.roomData;
  }
}
