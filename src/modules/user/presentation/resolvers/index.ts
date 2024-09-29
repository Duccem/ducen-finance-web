import { CreateUserResolver } from './create-user';

export const resolvers = {
  queries: {},
  mutations: {
    createUser: CreateUserResolver,
  },
};

export default resolvers;

