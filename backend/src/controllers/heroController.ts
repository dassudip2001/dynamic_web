import { Request, Response } from 'express';
import { create, find, getAll, remove, update } from '../services/heroServices';
import { CreateHeroInput, UpdateHeroInput } from '../validation/heroValidationSchema';

export const allHeroes = async (req: Request, res: Response): Promise<void> => {
    try {
        const heroes = await getAll();
        res.status(200).json(heroes);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const createHero = async (req: Request<{}, {}, CreateHeroInput>, res: Response): Promise<void> => {
    try {
        const hero = await create(req.body);
        res.status(201).json(hero);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const updateHero = async (req: Request<{ id: string }, {}, UpdateHeroInput>, res: Response): Promise<void> => {
    try {
        const hero = await update(Number(req.params.id), req.body);
        res.status(200).json(hero);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const findHero = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    try {
        const hero = await find(Number(req.params.id));
        res.status(200).json(hero);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const deleteHero = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    try {
        await remove(Number(req.params.id));
        res.status(200).json({ message: 'Hero deleted' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
