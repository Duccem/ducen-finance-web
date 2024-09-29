import { Criteria } from '@/modules/shared/domain/core/Criteria';
import { Uuid } from '@/modules/shared/domain/core/value-objects/Uuid';
import { Nullable } from '@/modules/shared/domain/types/Nullable';
import { PrismaCriteriaConverter } from '@/modules/shared/infrastructure/prisma/PrismaCriteriaConverter';
import { PrismaClient } from '@prisma/client';
import { CardType } from '../../domain/card-type';
import { Company } from '../../domain/company';
import { Currency } from '../../domain/currency';
import { Wallet } from '../../domain/wallet';
import { WalletRepository } from '../../domain/wallet-repository';

export class PrismaWalletRepository implements WalletRepository {
  private readonly converter: PrismaCriteriaConverter;
  constructor(private readonly prisma: PrismaClient) {}
  get model() {
    return this.prisma.wallet;
  }
  async save(walletId: Uuid, wallet: Wallet): Promise<void> {
    const { id, userId, company, currency, cardType, ...data } =
      wallet.toPrimitives();
    await this.model.upsert({
      where: { id: walletId.value },
      update: {
        ...data,
      },
      create: {
        id,
        userId: userId,
        ...data,
      },
    });
  }
  async findWalletByCriteria(criteria: Criteria): Promise<Nullable<Wallet>> {
    const { where } = this.converter.criteria(criteria);
    const wallet = await this.model.findFirst({
      where,
      include: {
        cardType: true,
        company: true,
        currency: true,
      },
    });
    if (!wallet) return null;
    return Wallet.fromPrimitives(wallet);
  }
  async searchWalletsByCriteria(criteria: Criteria): Promise<Wallet[]> {
    const { where, orderBy, skip, take } = this.converter.criteria(criteria);
    const wallets = await this.model.findMany({
      where,
      skip,
      take,
      orderBy,
      include: {
        cardType: true,
        company: true,
        currency: true,
      },
    });
    return wallets.map((wallet) => Wallet.fromPrimitives(wallet));
  }
  async deleteWallet(walletId: string): Promise<void> {
    await this.model.delete({ where: { id: walletId } });
  }
  async listCurrencies(): Promise<Currency[]> {
    const currencies = await this.prisma.currency.findMany();
    return currencies.map((currency) => Currency.fromPrimitives(currency));
  }
  async listCompanies(): Promise<Company[]> {
    const companies = await this.prisma.company.findMany();
    return companies.map((company) => Company.fromPrimitives(company));
  }
  async listCardTypes(): Promise<CardType[]> {
    const cardTypes = await this.prisma.cardType.findMany();
    return cardTypes.map((cardType) => CardType.fromPrimitives(cardType));
  }
}

