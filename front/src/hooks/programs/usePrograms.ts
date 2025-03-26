import { useEffect, useState } from "react";
import { programService } from "@/services/programService";
import { ProgramType } from "@/types/programs/program";

export const usePrograms = () => {
  const [programs, setPrograms] = useState<ProgramType[]>([]);
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        let data_ = await programService.list();
        const data =
          data_.code == 200 && data_.status == "success" ? data_.list : [];
        setPrograms(data);
      } catch (e) {
        console.log("programs > e: ", e);
      }
    };
    fetchPrograms();
  }, []);
  return { programs };
};
