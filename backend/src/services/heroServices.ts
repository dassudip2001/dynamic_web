import { Hero } from '@prisma/client';
import prisma from '../config/prisma-client';
import { CreateHeroInput, UpdateHeroInput } from '../validation/heroValidationSchema';

// Get all heroes
export const getAll = async (): Promise<Hero[]> => {
    return prisma.hero.findMany();
};

// create a hero
export const create = async (data: CreateHeroInput): Promise<Hero> => {
    return prisma.hero.create({ data });
};

// fine one hero
export const find = async (id: number): Promise<Hero | null> => {
    return prisma.hero.findUnique({ where: { id } });
};

// update a hero
export const update = async (id: number, data: UpdateHeroInput): Promise<Hero> => {
    return prisma.hero.update({ where: { id }, data });
};

// delete a hero
export const remove = async (id: number): Promise<Hero> => {
    return prisma.hero.delete({ where: { id } });
};
