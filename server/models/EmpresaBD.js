import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createEmpresa(data) {
  const empresa = await prisma.empresa.create({
    data: {
      nombre_de_empresa: data.nombre_de_empresa,
      CUIT_CUIL: data.CUIT_CUIL,
      Dirección: data.Dirección,
      logo_de_empresa: data.logo_de_empresa,
      google_maps: data.google_maps,
      servicio_de_la_empresa: data.servicio_de_la_empresa,
      dueño_de_la_empresa: data.dueño_de_la_empresa,
      telefono_de_la_empresa: data.telefono_de_la_empresa,
    },
  });

  return empresa;
}
