import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUsuarios(data) {
  const usuarios = await prisma.usuarios.create({
    data: {
      usuario: data.usuario,
      clave: data.clave,
      rol: data.rol,
      cargo: data.cargo,
      nombre: data.nombre,
      dni: data.dni,
      numero: data.numero,
    },
  });

  return usuarios;
}
