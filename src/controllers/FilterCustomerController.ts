import { FastifyRequest, FastifyReply } from "fastify";
import { FilterCustomerService } from "../services/FilterCustomerService";

class FilterCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {

    console.log('Name:', request.query);
    
    const { name } = request.query as { name: string }

    const filterCustomerService = new FilterCustomerService()

    const customers = await filterCustomerService.execute({ name })

    reply.send(customers)
  }
}

export { FilterCustomersController}