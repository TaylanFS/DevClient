import prismaClient from "../prisma"

interface DetailsCustomerProps {
  id: string
}

class DetailsCustomerService {
  async execute(detailsCustomerProps: DetailsCustomerProps) {
    const detailCustomer = await prismaClient.customer.findFirst({
      where: {
        id: detailsCustomerProps.id
      }
    })
    
    return detailCustomer
  }
}

export { DetailsCustomerService }
