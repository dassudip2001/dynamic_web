import prisma from '../config/prisma-client';

// all
export const allServices = async () => {
    return prisma.service.findMany();
};

// create
export const createService = async (data: any) => {
    return prisma.service.create({ data });
};

// find
export const findService = async (id: number) => {
    return prisma.service.findUnique({ where: { id } });
};

// update
export const updateService = async (id: number, data: any) => {
    return prisma.service.update({ where: { id }, data });
};

// delete
export const deleteService = async (id: number) => {
    return prisma.service.delete({ where: { id } });
};
