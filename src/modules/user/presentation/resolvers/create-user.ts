import { db } from '@/modules/shared/infrastructure/prisma/PrismaConnection';
import { RegisterUser } from '../../application/user-register';
import { PrismaUserRepository } from '../../infrastructure/persistence/prisma-user-repository';

export const CreateUserResolver = async (ctx, input) => {
  try {
    const { user } = input;
    const useCase = new RegisterUser(new PrismaUserRepository(db));
    await useCase.run(user.id, user.externalId, user.email, user.role);
  } catch (error) {
    console.log(error);
  }
};
