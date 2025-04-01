// model => ../../../../back/src/app/models/leadModel.ts

export type LeadType = {
  incremental: string;
  full_name: string;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  level: "Principiante" | "Avanzado";
  mobile_phone: string;
  interestProgram: string;
  status: "active" | "inactive";
  tracking: { tracking: number; description: string }[];
};
