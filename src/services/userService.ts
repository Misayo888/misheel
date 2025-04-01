
import jwt from 'jsonwebtoken';
import prisma from '../database';
import { encrypt } from '../utils/encryption';
import { decrypt } from '../utils/encryption' ;

export const userService = {
    registerUser: async ({ email, password }: { email: string; password: string }) => {
        const encryptedPassword =  encrypt(password);
        return prisma.user.create({ data: { email, password: encryptedPassword } });
    },

    loginUser: async ({ email, password }: { email: string; password: string }) => {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !(decrypt(user.password))) {
            throw new Error('Invalid credentials');
        }
        return jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    }
};