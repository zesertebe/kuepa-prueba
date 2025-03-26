import { leadService } from "@/services/leadService";
import { LeadType } from "@/types/leads/lead";
import { useEffect, useState } from "react";

export const useLeadForm = () => {
  const lead_: Partial<LeadType> = {
    email: "",
    first_name: "",
    full_name: "",
    interestProgram: "",
    last_name: "",
    mobile_phone: "",
    status: "inactive",
  };
  const [lead, setLead] = useState<Partial<LeadType>>(lead_);
  useEffect(() => {}, []);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("lead: ", lead);
    const result = await leadService.create({ data: lead });
    console.log("que pasa: ", result);
    if (result.code == 200 && result.status === "success") {
      setLead(lead_);
      return true;
    }
    return false;
  };
  return { lead, handleSubmit, setLead };
};
