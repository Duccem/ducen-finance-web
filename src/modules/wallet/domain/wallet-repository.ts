import { Criteria } from '@/modules/shared/domain/core/Criteria';
import { Uuid } from '@/modules/shared/domain/core/value-objects/Uuid';
import { Nullable } from '@/modules/shared/domain/types/Nullable';
import { CardType } from './card-type';
import { Company } from './company';
import { Currency } from './currency';
import { Wallet } from './wallet';

export interface WalletRepository {
  save(walletId: Uuid, wallet: Wallet): Promise<void>;
  findWalletByCriteria(criteria: Criteria): Promise<Nullable<Wallet>>;
  searchWalletsByCriteria(criteria: Criteria): Promise<Wallet[]>;
  deleteWallet(walletId: string): Promise<void>;
  listCurrencies(): Promise<Currency[]>;
  listCompanies(): Promise<Company[]>;
  listCardTypes(): Promise<CardType[]>;
}

