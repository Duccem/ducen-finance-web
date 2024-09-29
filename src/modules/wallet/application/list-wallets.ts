import { Criteria, Operator } from '@/modules/shared/domain/core/Criteria';
import { WalletRepository } from '../domain/wallet-repository';

export class ListWallets {
  constructor(private readonly walletRepository: WalletRepository) {}

  async run(userId: string) {
    return await this.walletRepository.searchWalletsByCriteria(
      Criteria.fromValues([
        { field: 'userId', value: userId, operator: Operator.EQUAL },
      ])
    );
  }
}

