import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export interface ProductCreate {
    nome: string;
    preco: number;
    estoque?: number;
}

export interface Product {
    id: number;
    nome: string;
    preco: number;
    estoque: number;
    criadoEm: Date;
    atualizadoEm: Date;
}

class ProductModel {
    
    async create(data: ProductCreate): Promise<Product> {
        return await prismaClient.produto.create({
            data: {
                nome: data.nome,
                preco: data.preco,
                estoque: data.estoque || 0
            }
        });
    }

    async findAll(): Promise<Product[]> {
        return await prismaClient.produto.findMany({
            orderBy: {
                criadoEm: 'desc'
            }
        });
    }

    async findById(id: number): Promise<Product | null> {
        return await prismaClient.produto.findFirst({
            where: { id }
        });
    }

    async update(id: number, data: Partial<ProductCreate>): Promise<Product> {
        return await prismaClient.produto.update({
            where: { id },
            data: {
                ...data,
                atualizadoEm: new Date()
            }
        });
    }

    async delete(id: number): Promise<Product> {
        return await prismaClient.produto.delete({
            where: { id }
        });
    }

    async findByNome(nome: string): Promise<Product[]> {
        return await prismaClient.produto.findMany({
            where: {
                nome: {
                    contains: nome,
                }
            }
        });
    }

    async updateEstoque(id: number, novoEstoque: number): Promise<Product> {
        return await prismaClient.produto.update({
            where: { id },
            data: {
                estoque: novoEstoque,
                atualizadoEm: new Date()
            }
        });
    }
}

export default new ProductModel();