import { db } from '@/modules/shared/infrastructure/prisma/PrismaConnection';
import { CreateWallet } from '../../application/create-wallet';
import { PrismaWalletRepository } from '../../infrastructure/persistence/prisma-wallet-repository';

export const CreateWalletResolver = async (ctx, input) => {
  try {
    const { wallet } = input;
    const { user } = ctx;
    const useCase = new CreateWallet(new PrismaWalletRepository(db));
    const data = {
      id: wallet.id,
      name: wallet.name,
      image: wallet.image,
      balance: wallet.balance,
      companyId: wallet.companyId,
      currencyId: wallet.currencyId,
      cardTypeId: wallet.cardTypeId,
      userId: user.id,
    };
    await useCase.run(data);
  } catch (error) {
    console.log(error);
  }
};

