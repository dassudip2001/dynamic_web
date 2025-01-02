import { Work } from '@prisma/client';
import prisma from '../config/prisma-client';

// all
export const allWork = async (): Promise<Work[]> => {
    return prisma.work.findMany();
};

// create
export const createWork = async (data: any): Promise<Work> => {
    return prisma.work.create({ data });
};

// find
export const findWork = async (id: number): Promise<Work | null> => {
    return prisma.work.findUnique({ where: { id } });
};

// update
export const updateWork = async (id: number, data: any): Promise<Work> => {
    return prisma.work.update({ where: { id }, data });
};

// delete
export const deleteWork = async (id: number): Promise<Work> => {
    return prisma.work.delete({ where: { id } });
};
