import { db } from '@/modules/shared/infrastructure/prisma/PrismaConnection';
import { ListCardTypes } from '../../application/list-card-types';
import { PrismaWalletRepository } from '../../infrastructure/persistence/prisma-wallet-repository';

export const ListCardTypesResolver = async () => {
  try {
    const useCase = new ListCardTypes(new PrismaWalletRepository(db));
    return await useCase.run();
  } catch (error) {
    console.log(error);
  }
};
