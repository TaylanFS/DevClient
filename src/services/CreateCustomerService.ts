import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string,
  email: string
}

class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {

    if(!name || !email) {
      throw new Error("Preencha todos os campos!")
    }
    
    const checkEmail = await prismaClient.customer.findFirst({
      where: {
        email: email
      }
    })

    if(checkEmail) {
      throw new Error("Email já existe!")
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true
      }
    })
    return customer
  }
}

export { CreateCustomerService }