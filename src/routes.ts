import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { DetailsCustomerController } from "./controllers/DetailsCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  // Rota de teste
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true }
  })

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(request, reply)
  })

  fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomersController().handle(request, reply)
  })

  fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply)
  })

  fastify.get("/details", async (request: FastifyRequest<{ Querystring: { id: string } }>, reply: FastifyReply) => {
    return new DetailsCustomerController().handle(request, reply)
  })
}