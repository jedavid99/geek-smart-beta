import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createServicio(data) {
  const servicios = await prisma.servicios.create({
    data: {
      codigo: data.codigo,
      nombre: data.nombre,
      categoria: data.categoria,
      servicio: data.servicio,
      precio: data.precio,
      dispositivo: data.dispositivo,
      dni: data.dni,
      telefono_cliente: data.telefono_cliente,
      fecha_registro: data.fecha_registro,
      descripcion: data.descripcion,
      estatus: data.estatus,
      emei_codigo: data.emei_codigo,
      fecha_entregado: data.fecha_entregado,
    },
  });

  return servicios;
}
