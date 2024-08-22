import prismaClient from "../prisma"

interface DetailsCustomerProps {
  id: string
}

class DetailsCustomerService {
  async execute(detailsCustomerProps: DetailsCustomerProps) {

    if(!detailsCustomerProps.id) {
      throw new Error("Solicitação inválida!")
    }
    
    const detailsCustomer = await prismaClient.customer.findFirst({
      where: {
        id: detailsCustomerProps.id
      }
    })
    
    return detailsCustomer
  }
}

export { DetailsCustomerService }
