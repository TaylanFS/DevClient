import { FastifyRequest, FastifyReply } from "fastify";
import { DetailsCustomerService } from "../services/DetailsCustomerService";

class DetailsCustomerController {

  async handle(request: any, reply: FastifyReply) {

    const detailsCustomerService = new DetailsCustomerService()

    const customerId = { id: request.params.id }

    const customer = await detailsCustomerService.execute(customerId)

    reply.send(customer)
  }
}

export { DetailsCustomerController }