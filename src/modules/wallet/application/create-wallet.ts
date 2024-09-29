import { Primitives } from '@/modules/shared/domain/types/Primitives';
import { Wallet } from '../domain/wallet';
import { WalletRepository } from '../domain/wallet-repository';

export class CreateWallet {
  constructor(private readonly walletRepository: WalletRepository) {}

  async run(data: Partial<Primitives<Wallet>>) {
    const wallet = Wallet.Create(
      data.id,
      data.name,
      data.image,
      data.balance,
      data.companyId,
      data.currencyId,
      data.cardTypeId,
      data.userId
    );
    await this.walletRepository.save(wallet.id, wallet);
  }
}

