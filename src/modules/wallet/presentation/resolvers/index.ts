import { CreateWalletResolver } from './create-wallet';
import { DeleteWalletResolver } from './delete-wallet';
import { GetWalletResolver } from './get-wallet';
import { ListCardTypesResolver } from './list-card-types';
import { ListCompaniesResolver } from './list-companies';
import { ListCurrenciesResolver } from './list-currencies';
import { ListWalletsResolver } from './list-wallets';

export const resolvers = {
  queries: {
    wallets: ListWalletsResolver,
    wallet: GetWalletResolver,
    currencies: ListCurrenciesResolver,
    companies: ListCompaniesResolver,
    cardTypes: ListCardTypesResolver,
  },
  mutations: {
    createWallet: CreateWalletResolver,
    deleteWallet: DeleteWalletResolver,
  },
};

