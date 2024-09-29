import { db } from '@/modules/shared/infrastructure/prisma/PrismaConnection';
import { ListWallets } from '../../application/list-wallets';
import { PrismaWalletRepository } from '../../infrastructure/persistence/prisma-wallet-repository';

export const ListWalletsResolver = async (_, __, ctx) => {
  try {
    const { user } = ctx;
    const useCase = new ListWallets(new PrismaWalletRepository(db));
    return await useCase.run(user.id);
  } catch (error) {
    console.log(error);
  }
};

