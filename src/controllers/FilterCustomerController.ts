import { FastifyRequest, FastifyReply } from "fastify";
import { FilterCustomerService } from "../services/FilterCustomerService";

class FilterCustomersController {
  async handle(request: FastifyRequest<{ Querystring: { name: string } }>, reply: FastifyReply) {
    
    const { name } = request.query as { name: string }

    const filterCustomerService = new FilterCustomerService()

    const customers = await filterCustomerService.execute({ name })

    reply.send(customers)
  }
}

export { FilterCustomersController}