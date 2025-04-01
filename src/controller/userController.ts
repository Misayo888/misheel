import { Request, Response } from 'express';
import { userService } from '../services/userService';

export const registerUser = async (req: Request, res: Response) => {
    try {
        .0
        const user = await userService.registerUser(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const token = await userService.loginUser(req.body);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: 'Invalid credentials' });
    }
};