import { PrismaClient } from '@prisma/client';
import * as faker from 'faker';
const prisma = new PrismaClient();

async function main() {}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
