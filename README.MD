# Kuepa Prueba Técnica


## Descripción
Repositorio para el proyecto de prueba técnica en Kuepa

## Cambios
Estos son los archivo en donde hice cambios:
- Rutas: **back/src/app/router/index.ts**
- Hook form lead: **front/src/hooks/leads/useLeadForm.ts**
- Hook leads: **front/src/hooks/leads/useLeads.ts**
- Page Leads: **front/src/pages/leads.tsx**
- Service Leads: **front/src/services/leadService.tsx**
- Tipos para Leads: **front/src/types/leads/lead.ts**
- Model para program: **back/src/app/models/index.ts**
- Controlador para program: **back/src/app/domains/program/programController.ts**
- Service para program: **back/src/app/domains/program/programService.ts**
- Rutas para program: **back/src/app/domains/program/programRoute.ts**
- Seeder para program: **back/src/core/seeders/initSeeder.ts**

> [!NOTE]\
> En el formulario de creación de un prospecto se utiliza un select con el componente select de la libreria radix.
> Sin embargo este select arroja algunos errores cuando se utiliza. No tuve tiempo para revisar el porqué pero debería
> ser corregido en algún momento. A pesar de eso los valores se seleccionan correctamente. 

