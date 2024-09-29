import { db } from '@/modules/shared/infrastructure/prisma/PrismaConnection';
import { ListCurrencies } from '../../application/list-currencies';
import { PrismaWalletRepository } from '../../infrastructure/persistence/prisma-wallet-repository';

export const ListCurrenciesResolver = async () => {
  try {
    const useCase = new ListCurrencies(new PrismaWalletRepository(db));
    return await useCase.run();
  } catch (error) {
    console.log(error);
  }
};
