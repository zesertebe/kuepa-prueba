import { app } from "@/atoms/kuepa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLeads } from "@/hooks/leads/useLeads";
import { LeadType } from "@/types/leads/lead";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SelectGroup,
  SelectPortal,
  SelectViewport,
} from "@radix-ui/react-select";
import { ProgramType } from "@/types/programs/program";
import { usePrograms } from "@/hooks/programs/usePrograms";
import { useLeadForm } from "@/hooks/leads/useLeadForm";

export interface LeadsProps {}

export default function Leads(props?: LeadsProps) {
  useLeadForm();
  console.log("props: ", props);
  const programs: ProgramType[] = usePrograms().programs;
  console.log("los programas: ", programs);
  const leads: LeadType[] = useLeads().leads;
  const { handleSubmit, lead, setLead } = useLeadForm();
  console.log("a ver leads: ", leads);
  useEffect(() => {
    app.set({
      ...(app.get() || {}),
      app: "kuepa",
      module: "leads",
      window: "crm",
      back: null,
      accent: "purple",
      breadcrumb: [
        {
          title: "Leads",
          url: "/leads",
        },
      ],
    });
  }, []);
  return (
    <>
      <h1 className="flex text-4xl font-title text-purple-800">Prospectos</h1>
      <TableHead>
        <Dialog>
          <DialogTrigger asChild={true}>
            <Button>Agregar +</Button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay />
            <DialogContent>
              <DialogTitle>Agregar Nuevo Prospecto</DialogTitle>
              <DialogDescription>
                Agregue todos los datos del nuevo prospecto y luego haga clic en
                "Guardar"
              </DialogDescription>
              <fieldset>
                <label>Nombre</label>
                <Input
                  value={lead.first_name}
                  onChange={(v) =>
                    setLead({
                      ...lead,
                      first_name: v.target.value,
                      full_name: v.target.value + " " + lead.last_name,
                    })
                  }
                ></Input>
              </fieldset>
              <fieldset>
                <label>Apellidos</label>
                <Input
                  value={lead.last_name}
                  onChange={(v) =>
                    setLead({
                      ...lead,
                      last_name: v.target.value,
                      full_name: lead.first_name + " " + v.target.value,
                    })
                  }
                ></Input>
              </fieldset>
              <fieldset>
                <label>Nombres Completos</label>
                <Input value={lead.full_name} disabled={true}></Input>
              </fieldset>
              <fieldset>
                <label>Email</label>
                <Input
                  type="email"
                  value={lead.email}
                  onChange={(v) =>
                    setLead({
                      ...lead,
                      email: v.target.value,
                    })
                  }
                ></Input>
              </fieldset>
              <fieldset>
                <label>Telefono</label>
                <Input
                  value={lead.mobile_phone}
                  onChange={(v) =>
                    setLead({ ...lead, mobile_phone: v.target.value })
                  }
                />
              </fieldset>
              <fieldset>
                <label>Estado</label>
                <Select value={lead.status}>
                  <SelectTrigger
                    autoFocus={false}
                    onFocus={(e) => e.preventDefault()}
                  >
                    <SelectValue
                      placeholder="Seleccione.."
                      autoFocus={false}
                      onFocus={(e) => e.preventDefault()}
                    />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectContent
                      autoFocus={false}
                      onFocus={(e) => e.preventDefault()}
                    >
                      <SelectViewport>
                        <SelectItem value="active">Activo</SelectItem>
                        <SelectItem value="inactive">Inactivo</SelectItem>
                      </SelectViewport>
                    </SelectContent>
                  </SelectPortal>
                </Select>
              </fieldset>
              <fieldset>
                <label>Programa</label>
                <Select value={lead.interestProgram}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione.." />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectContent>
                      <SelectViewport>
                        {programs.map((program) => (
                          <SelectItem
                            key={program["_id"]}
                            value={program["_id"]}
                          >
                            {program.name}
                          </SelectItem>
                        ))}
                      </SelectViewport>
                    </SelectContent>
                  </SelectPortal>
                </Select>
              </fieldset>
              <DialogFooter>
                <Button variant="destructive" type="submit">
                  Guardar
                </Button>
              </DialogFooter>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </TableHead>
      <Table about="vomo" title="Lista de Prospectos">
        <TableHeader className="text-red-500 font-extrabold">
          <TableRow>
            <TableCell>Nombre Completo</TableCell>
            <TableCell>Primer Nombre</TableCell>
            <TableCell>Apellidos</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Numero de telefono</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Programa de interes</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads &&
            leads.map((lead) => (
              <TableRow key={lead.incremental}>
                <TableCell>{lead.full_name}</TableCell>
                <TableCell>{lead.first_name}</TableCell>
                <TableCell>{lead.last_name}</TableCell>
                <TableCell>{lead.email}</TableCell>
                <TableCell>{lead.mobile_phone}</TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell>{lead.interestProgram}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
