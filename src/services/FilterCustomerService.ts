import prismaClient from "../prisma";

interface FilterCustomerProps {
  name: string
}

class FilterCustomerService {
  async execute({ name }: FilterCustomerProps) {

    console.log('Name:', name)
    

    const customers = await prismaClient.customer.findMany({
      where: {
        name: name
      }
    })

    return customers
  }
}

export { FilterCustomerService }