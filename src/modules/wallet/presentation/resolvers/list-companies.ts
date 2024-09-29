import { db } from '@/modules/shared/infrastructure/prisma/PrismaConnection';
import { ListCompanies } from '../../application/list-companies';
import { PrismaWalletRepository } from '../../infrastructure/persistence/prisma-wallet-repository';

export const ListCompaniesResolver = async () => {
  try {
    const useCase = new ListCompanies(new PrismaWalletRepository(db));
    return await useCase.run();
  } catch (error) {
    console.log(error);
  }
};
