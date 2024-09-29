import { getSchema } from '@/modules/shared/infrastructure/graphql/schema';
import { resolvers as usersResolver } from '@/modules/user/presentation/resolvers';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { DateTimeResolver, VoidResolver } from 'graphql-scalars';
import { NextRequest } from 'next/server';
const resolvers = {
  Query: {
    ping: () => {
      return 'pong';
    },
    ...usersResolver.queries,
  },
  Mutation: {
    ...usersResolver.mutations,
  },
};
const apolloServer = new ApolloServer({
  typeDefs: [getSchema()],
  resolvers: {
    DateTime: DateTimeResolver,
    Void: VoidResolver,
    ...resolvers,
  },
});
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer);
export async function GET(request: NextRequest) {
  return handler(request);
}
export async function POST(request: NextRequest) {
  return handler(request);
}

