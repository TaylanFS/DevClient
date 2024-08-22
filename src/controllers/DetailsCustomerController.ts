import { FastifyRequest, FastifyReply } from "fastify";
import { DetailsCustomerService } from "../services/DetailsCustomerService";

interface QueryProps {
  id: string
}

class DetailsCustomerController {

  async handle(request: FastifyRequest<{ Querystring: QueryProps }>, reply: FastifyReply) {
    
    const { id } = request.query as { id: string }
    
    const detailsCustomerService = new DetailsCustomerService()

    const customer = await detailsCustomerService.execute({ id })

    reply.send(customer)
  }
}

export { DetailsCustomerController }