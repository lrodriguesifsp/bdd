// insert-user.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const data = { 
        dataLancamento: new Date("2024-08-07"),
        duracao: new Date("2024-08-07T10:30:45")
    };
    await prisma.music.create({ data });
    console.log("Cadastro realizado com sucesso!");
}

main();