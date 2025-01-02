import { Request, Response } from 'express';
import prisma from '../config/prisma-client';

export const allData = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log('allData');

        const hero = await prisma.hero.findUnique({
            where: { id: Number(req.params.id) },
            include: {
                services: true,
                works: true
            }
        });

        res.status(200).json(hero);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
