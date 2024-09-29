import { WalletRepository } from '../domain/wallet-repository';

export class DeleteWallet {
  constructor(private readonly walletRepository: WalletRepository) {}

  async run(id: string) {
    return await this.walletRepository.deleteWallet(id);
  }
}
