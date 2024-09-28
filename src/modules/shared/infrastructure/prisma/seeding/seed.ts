import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();
async function main() {
  await client.user.upsert({
    where: { email: 'ducen29@gmail.com' },
    update: {},
    create: {
      email: 'ducen29@gmail.com',
      externalId: '123456',
    },
  });
}

main()
  .then(async () => {
    console.log('Seeding done');
    await client.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await client.$disconnect();
    process.exit(1);
  });

