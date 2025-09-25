import { Request, Response, NextFunction } from "express";
import {ProductCreate} from "../models/ProductModel";
import  ProductRepository  from "../repositories/ProductRepository";

export class ProductController{
    async postProduct(req: Request, res: Response, next: NextFunction){
        const product = req.body as ProductCreate;
        const result = await ProductRepository.create(product);
        if(result){
            res.status(201).json({result: result, message: "Produto criado com sucesso!"})
        }else{
            res.sendStatus(400);
        }
    }
    
    async getProducts(req: Request, res: Response, next: NextFunction){
        const result = await ProductRepository.listProducts();
        if(result){
            res.status(202).json(result)
        }else{
            res.sendStatus(500);
        }
    }
    async getProduct(req: Request, res: Response, next: NextFunction){
        const id = req.params.id as string;
        const result = await ProductRepository.listProduct(parseInt(id));

        if(result){
            res.status(202).json(result)
        }else{
            res.sendStatus(404);
        }
    }
    async getProductByName(req: Request, res: Response, next: NextFunction){
        const {nome} = req.body
        console.log(nome)
        const result = await ProductRepository.listProductByName(nome);
        if(result){
            res.status(202).json(result);
        }else{
            res.sendStatus(404);
        }

    }
    async putProduct(req: Request, res: Response, next: NextFunction){
        const id = req.params.id as string;
        const {nome, preco, estoque} = req.body;
        const result = await ProductRepository.update(parseInt(id), {nome, preco, estoque});
        if(result){
            res.status(201).json({result: result, message: "Produto atualizado com sucesso!"})
        }else{
            res.sendStatus(404);
        }
    }
    async putProductEstoque(req: Request, res: Response, next: NextFunction){
        const {id, estoque} = req.body;
        const result = await ProductRepository.updateEstoque(id, estoque);
        if(result){
            res.status(201).json({result: result, message: "Estoque do Produto Atualizado com Sucesso"});
        }else{
            res.sendStatus(404);
        }
    }
    async deleteProduct(req: Request, res: Response, next: NextFunction){
        const id  = req.params.id as string;
        if(!id){
            res.status(404).json({message: "Não foi passado id"})
        }else{
            const result = await ProductRepository.deleteProduct(parseInt(id));
            if(result){
                res.status(200).json({result: result, message: "Produto deletado com sucesso"});
            }

        }
    }
}
export default new ProductController();