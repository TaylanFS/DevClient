import prismaClient from "../prisma";

interface UpdateCustomerProps {
  id: string
  name: string
  email: string
}

class UpdateCustomerService {
  async execute(updateCustomerProps: UpdateCustomerProps) {

    console.log(updateCustomerProps)

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