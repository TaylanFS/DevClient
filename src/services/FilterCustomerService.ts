import prismaClient from "../prisma";

interface FilterCustomerProps {
  name: string
}

class FilterCustomerService {
  async execute({ name }: FilterCustomerProps) {    

    if(!name) {
      throw new Error("Preencha todos os campos!")
    }

    const customers = await prismaClient.customer.findMany({
      where: {
        name: name
      }
    })

    if(customers.length === 0) {
      throw new Error("Nenhum cliente encontrado!")
    }

    return customers
  }
}

export { FilterCustomerService }