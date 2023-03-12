const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    async getItems() {
        return prisma.item.findMany();
    },

    async getItem(id) {
        return prisma.item.findUnique({ where: { id } });
    }
};
