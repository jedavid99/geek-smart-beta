import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createProveedores(data) {
  const proveedores = await prisma.proveedores.create({
    data: {
      nombre: data.nombre,
      cuit_cuil: data.cuit_cuil,
      dirección: data.dirección,
      telefono: data.telefono,
      categoria: data.categoria,
      calidad: data.calidad,
    },
  });

  return proveedores;
}
