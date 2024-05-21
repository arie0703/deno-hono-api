const kv = await Deno.openKv("kv.sqlite");

export const setRoomSession = async (roomId: string) => {
  const result = await kv.set(["currentSession"], roomId);

  console.log(result);
  return result;
};

export const getCurrentSession = async () => {
  const session = await kv.get<string>(["currentSession"]);
  console.log(session);

  return session;
};
