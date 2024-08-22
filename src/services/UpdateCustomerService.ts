import prismaClient from "../prisma";

interface UpdateCustomerProps {
  id: string
  name: string
  email: string
}

class UpdateCustomerService {
  async execute(updateCustomerProps: UpdateCustomerProps) {

    if(updateCustomerProps.id === "" || updateCustomerProps.name === "" || updateCustomerProps.email === "") {
      throw new Error("Preencha todos os campos!")
    }

    const checkEmail = await prismaClient.customer.findFirst({
      where: {
        email: updateCustomerProps.email
      }
    })

    if(checkEmail) {
      throw new Error("Email já existe!")
    }

    const updateCustomer = await prismaClient.customer.update({
      where: {
        id: updateCustomerProps.id
      },
      data: {
        name: updateCustomerProps.name,
        email: updateCustomerProps.email
      }
    })

    return updateCustomer
    
  }

}

export { UpdateCustomerService }