import prisma from "../database";


export const productService = {
    createProduct: async ({ name, price }: { name: string; price: number }) => {
        return prisma.product.create({ data: { name, price } });
    },

    getProducts: async () => {
        return prisma.product.findMany();
    },

    updateProduct: async (id: number, { name, price }: { name: string; price: number }) => {
        return prisma.product.update({ where: { id: Number(id) }, data: { name, price } });
    },

    deleteProduct: async (id: number) => {
        return prisma.product.delete({ where: { id } });
    }
};
