import prismaClient from "../prisma"

interface DetailsCustomerProps {
  id: string
}

class DetailsCustomerService {
  async execute(detailsCustomerProps: DetailsCustomerProps) { //támbem poderia ser - detailsCustomerProps: DetailsCustomerProps, e na linha 11:
    const detailCustomer = await prismaClient.customer.findFirst({
      where: {
        id: detailsCustomerProps.id // e aqui id: detailsCustomerProps.id
      }
    })
    
    return detailCustomer
  }
}

export { DetailsCustomerService }
