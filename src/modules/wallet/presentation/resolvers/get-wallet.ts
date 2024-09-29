import { db } from '@/modules/shared/infrastructure/prisma/PrismaConnection';
import { GetWallet } from '../../application/get-wallet';
import { PrismaWalletRepository } from '../../infrastructure/persistence/prisma-wallet-repository';

export const GetWalletResolver = async (_, args: any) => {
  try {
    const { id } = args;
    const useCase = new GetWallet(new PrismaWalletRepository(db));
    return await useCase.run(id);
  } catch (error) {
    console.log(error);
  }
};

