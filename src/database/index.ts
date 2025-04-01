import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
dotenv.config();
const primsa = new PrismaClient();

export default primsa;
