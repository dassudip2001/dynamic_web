import { Request, Response } from 'express';
import { allWork, createWork, findWork, updateWork, deleteWork } from '../services/workService';

export const all = async (req: Request, res: Response) => {
    try {
        const work = await allWork();
        res.status(200).json(work);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const work = await createWork(req.body);
        res.status(201).json(work);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const work = await updateWork(Number(req.params.id), req.body);
        res.status(200).json(work);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const find = async (req: Request, res: Response) => {
    try {
        const work = await findWork(Number(req.params.id));
        res.status(200).json(work);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const remove = async (req: Request, res: Response) => {
    try {
        await deleteWork(Number(req.params.id));
        res.status(200).json({ message: 'work deleted' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
