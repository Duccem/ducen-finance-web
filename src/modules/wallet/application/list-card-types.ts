import { WalletRepository } from '../domain/wallet-repository';

export class ListCardTypes {
  constructor(private readonly walletRepository: WalletRepository) {}

  async run() {
    return await this.walletRepository.listCardTypes();
  }
}
