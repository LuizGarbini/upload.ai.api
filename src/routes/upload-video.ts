import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { Multipart } from "@fastify/multipart";

export async function uploadVideoRoute(app: FastifyInstance ) {
    app.post('/videos', async () => {
      
    })
}