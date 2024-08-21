import prismaClient from "../prisma"

interface DetailsCustomerProps {
  id: string
}

class DetailsCustomerService {
  async execute(detailsCustomerProps: DetailsCustomerProps) {

    console.log('ID:', detailsCustomerProps.id)

    if(!detailsCustomerProps.id) {
      throw new Error("Solicitação inválida!")
    }
    
    const detailsCustomer = await prismaClient.customer.findFirst({
      where: {
        id: detailsCustomerProps.id
      }
    })

    console.log(detailsCustomer)
    
    return detailsCustomer
  }
}

export { DetailsCustomerService }
