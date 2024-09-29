import { WalletRepository } from '../domain/wallet-repository';

export class ListCurrencies {
  constructor(private walletRepository: WalletRepository) {}
  async run() {
    return await this.walletRepository.listCurrencies();
  }
}
