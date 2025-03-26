import { leadService } from "@/services/leadService";
import { LeadType } from "@/types/leads/lead";
import { useEffect, useState } from "react";

export const useLeads = () => {
  const [leads, setLeads] = useState<LeadType[]>([]);
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        let data_ = await leadService.list();
        const data =
          data_.code == 200 && data_.status == "success" ? data_.list : [];
        setLeads(data);
      } catch (e) {
        console.log("leads > e: ", e);
      }
    };
    fetchLeads();
  }, []);
  return { leads };
};
