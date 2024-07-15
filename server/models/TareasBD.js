import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTareas(data) {
  const tareas = await prisma.tareas.create({
    data: {
        tarea: data.tarea,
        created_at: data.created_at,
        status: data.status,
        titulo: data.titulo,
        fecha_update: data.fecha_update,
    
    },
  });

  return tareas;
}
