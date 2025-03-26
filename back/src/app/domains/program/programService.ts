import { Program } from "@app/models";
import { responseUtility } from "@core/utilities/responseUtility";

class ProgramService {
  constructor() {}

  public async get(_params: { _id: string }) {
    try {
      const program = await Program.findOne({ _id: _params._id }).lean();
      if (!program) return responseUtility.error("program.not_found");
      return responseUtility.success({
        program,
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  public async list(_params) {
    try {
      const where: any = {};
      let programs = await Program.find(where)
        .sort({ created_at: -1 })
        .limit(100)
        .lean();

      return responseUtility.success({
        list: programs,
      });
    } catch (error) {
      console.log("error", error);
    }
  }
}

export const programService = new ProgramService();
export { ProgramService };
