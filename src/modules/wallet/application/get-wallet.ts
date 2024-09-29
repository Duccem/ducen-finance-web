import { Criteria, Operator } from '@/modules/shared/domain/core/Criteria';
import { WalletRepository } from '../domain/wallet-repository';

export class GetWallet {
  constructor(private readonly walletRepository: WalletRepository) {}

  async run(id: string) {
    return await this.walletRepository.findWalletByCriteria(
      Criteria.fromValues([
        { field: 'id', value: id, operator: Operator.EQUAL },
      ])
    );
  }
}

