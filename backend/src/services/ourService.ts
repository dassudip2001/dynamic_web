import { Hero, Service } from '@prisma/client';
import prisma from '../config/prisma-client';
import { CreateServiceInput, UpdateServiceInput } from '../validation/servicesValidationSchema';

// all
export const allServices = async (): Promise<Service[]> => {
    return prisma.service.findMany();
};

// create
export const createService = async (data: CreateServiceInput): Promise<Service> => {
    return prisma.service.create({ data });
};

// find
export const findService = async (id: number): Promise<Service | null> => {
    return prisma.service.findUnique({ where: { id } });
};

// update
export const updateService = async (id: number, data: UpdateServiceInput): Promise<Service> => {
    return prisma.service.update({ where: { id }, data });
};

// delete
export const deleteService = async (id: number): Promise<Service> => {
    return prisma.service.delete({ where: { id } });
};
