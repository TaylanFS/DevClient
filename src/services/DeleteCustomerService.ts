import prismaClient from "../prisma"

interface DeleteCustomerProps {
  id: string
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {

    if(!id) {
      throw new Error("Solicitação inválida!")
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id
        //poderia ser somente o id, pois a chave é a mesma do valor.
      }
    })

    if(!findCustomer) {
      throw new Error("Cliente não existe!")
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id
      }
    })

    return { message: "Deletado com sucesso!" }
  }
}

export { DeleteCustomerService }