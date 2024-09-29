import { db } from '@/modules/shared/infrastructure/prisma/PrismaConnection';
import { DeleteWallet } from '../../application/delete-wallet';
import { PrismaWalletRepository } from '../../infrastructure/persistence/prisma-wallet-repository';

export const DeleteWalletResolver = async (_, args: any) => {
  try {
    const { id } = args;
    const useCase = new DeleteWallet(new PrismaWalletRepository(db));
    return await useCase.run(id);
  } catch (error) {
    console.log(error);
  }
};
