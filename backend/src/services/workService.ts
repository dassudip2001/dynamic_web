import prisma from '../config/prisma-client';

// all
export const allWork = async () => {
    return prisma.work.findMany();
};

// create
export const createWork = async (data: any) => {
    return prisma.work.create({ data });
};

// find
export const findWork = async (id: number) => {
    return prisma.work.findUnique({ where: { id } });
};

// update
export const updateWork = async (id: number, data: any) => {
    return prisma.work.update({ where: { id }, data });
};

// delete
export const deleteWork = async (id: number) => {
    return prisma.work.delete({ where: { id } });
};
