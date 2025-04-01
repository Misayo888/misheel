import { Request, Response } from 'express';
import prisma from '../database';

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, price } = req.body;
        const product = await prisma.product.create({ data: { name, price } });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;
        const product = await prisma.product.update({ where: { id: Number(id) }, data: { name, price } });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.product.delete({ where: { id: Number(id) } });
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};
