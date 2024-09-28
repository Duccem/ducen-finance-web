import { PrismaClient } from '@prisma/client';

const createPrismaConnection = () => new PrismaClient();

type PrismaConnection = ReturnType<typeof createPrismaConnection>;

const globalWithPrisma = globalThis as unknown as { prisma?: PrismaConnection };

export const db = globalWithPrisma.prisma || createPrismaConnection();

if (process.env.NODE_ENV !== 'production') globalWithPrisma.prisma = db;
