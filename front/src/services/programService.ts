import { get, post } from "../util/http";
const api = "/program";
export const programService = {
  api,
  get: async ({ _id }: { _id: string }) => {
    return await get({ api: `${api}/get/${_id}` });
  },
  list: async (): Promise<any> => {
    const result = await get({ api: `${api}` });
    console.log("programS: ", result);
    return result;
  },
};
