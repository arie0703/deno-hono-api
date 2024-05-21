import { setRoomSession } from "../libs/session.ts";
import { Room } from "../models/room.ts";

const room = new Room();

export const createRoom = (roomName: string) => {
  const result = room.create(roomName);

  return {
    status: 201,
    data: result,
  };
};

export const getAllRoomData = () => {
  const data = room.getAllData();
  return data;
};

export const entryRoom = (roomId: string) => {
  const result = room.findById(roomId);

  if (result.length) {
    setRoomSession(roomId);

    return {
      status: 200,
      message: "部屋に入室しました。",
      data: result,
    };
  }
  return {
    status: 404,
    message: "指定されたIDの部屋が見つかりませんでした",
  };
};
