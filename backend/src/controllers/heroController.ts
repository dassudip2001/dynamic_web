import { Request, Response } from 'express';
import { create, find, getAll, remove, update } from '../services/heroServices';

export const allHeroes = async (req: Request, res: Response) => {
    try {
        const heroes = await getAll();
        res.status(200).json(heroes);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const createHero = async (req: Request, res: Response) => {
    try {
        const hero = await create(req.body);
        res.status(201).json(hero);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const updateHero = async (req: Request, res: Response) => {
    try {
        const hero = await update(Number(req.params.id), req.body);
        res.status(200).json(hero);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const findHero = async (req: Request, res: Response) => {
    try {
        const hero = await find(Number(req.params.id));
        res.status(200).json(hero);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const deleteHero = async (req: Request, res: Response) => {
    try {
        await remove(Number(req.params.id));
        res.status(200).json({ message: 'Hero deleted' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
