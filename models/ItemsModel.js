// models/ItemsModel.js
const prisma = require('../prismaClient');

exports.getItems = () => {
    return prisma.item.findMany();
};