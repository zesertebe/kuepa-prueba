import { leadService } from "@/services/leadService";
import { LeadType } from "@/types/leads/lead";
import { useEffect, useState } from "react";

export const useLeadForm = () => {
  const lead_: Partial<LeadType> = {
    email: "email@si.com",
    first_name: "pepe",
    full_name: "pepe lechuga",
    interestProgram: "",
    last_name: "lechuga",
    mobile_phone: "3303030030",
    status: "active",
  };
  const [lead, setLead] = useState<Partial<LeadType>>(lead_);
  useEffect(() => {}, []);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("lead: ", lead);
  };
  return { lead, handleSubmit, setLead };
};
