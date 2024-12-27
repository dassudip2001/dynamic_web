import prisma from '../config/prisma-client';

// Get all heroes
export const getAll = async () => {
    return prisma.hero.findMany();
};

// create a hero
export const create = async (data: any) => {
    return prisma.hero.create({ data });
};

// fine one hero
export const find = async (id: number) => {
    return prisma.hero.findUnique({ where: { id } });
};

// update a hero
export const update = async (id: number, data: any) => {
    return prisma.hero.update({ where: { id }, data });
};

// delete a hero
export const remove = async (id: number) => {
    return prisma.hero.delete({ where: { id } });
};
