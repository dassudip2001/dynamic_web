import { Request, Response } from 'express';
import { allServices, createService, updateService, findService, deleteService } from '../services/ourService';

export const all = async (req: Request, res: Response) => {
    try {
        const services = await allServices();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const service = await createService(req.body);
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const service = await updateService(Number(req.params.id), req.body);
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const find = async (req: Request, res: Response) => {
    try {
        const service = await findService(Number(req.params.id));
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const remove = async (req: Request, res: Response) => {
    try {
        await deleteService(Number(req.params.id));
        res.status(200).json({ message: 'service deleted' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
