import { LeadType } from "@/types/leads/lead";
import { get, post } from "../util/http";
const api = "/lead";
export const leadService = {
  api,
  get: async ({ _id }: { _id: string }) => {
    return await get({ api: `${api}/get/${_id}` });
  },
  list: async (): Promise<any> => {
    const result = await get({ api: `${api}` });
    console.log("leadS: ", result);
    return result;
  },
  create: async ({ data }: { data: Partial<LeadType> }): Promise<any> => {
    const result = await post({ api: `${api}/upsert`, options: { data } });
    console.log("result: ", result);
    return result;
  },
};
