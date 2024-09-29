import { WalletRepository } from '../domain/wallet-repository';

export class ListCompanies {
  constructor(private readonly companyRepository: WalletRepository) {}

  async run() {
    return await this.companyRepository.listCompanies();
  }
}
