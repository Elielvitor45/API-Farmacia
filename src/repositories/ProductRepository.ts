import ProductModel, { Product, ProductCreate } from "../models/ProductModel";


class ProductRepository {

    async create(productdata: ProductCreate): Promise<Product> {
        try {
            return await ProductModel.create(productdata);
        } catch (error) {
            throw new Error(`Erro ao criar produto: ${error}`);
        }
    }

    async update(id:number ,productdata: ProductCreate){
        try {
            return await ProductModel.update(id,productdata);
        } catch (error) {
            throw new Error(`Erro ao atualizar o produto: ${error}`);
        }
    }
    async updateEstoque(id:number, estoque:number){
        try {
            return await ProductModel.updateEstoque(id, estoque);
        } catch (error) {
            throw new Error(`Erro ao atualizar o estoque do produto: ${error}`);
        }
    }

    async listProducts(){
        try {
            return await ProductModel.findAll();
        } catch (error) {
            throw new Error(`Erro ao Listar os produto: ${error}`);
        }
    }

    async listProduct(id: number){
        try {
            return await ProductModel.findById(id);
        } catch (error) {
            throw new Error(`Erro ao tentar encontrar o produto: ${error}`);
        }
    }

    async listProductByName( name:string ){
        try {
            return await ProductModel.findByNome(name);
        } catch (error) {
            throw new Error(`Erro ao tentar encontrar o produto: ${error}`);
        }
    }
    
    async deleteProduct( id: number){
        try {
            return await ProductModel.delete(id);
        } catch (error) {
            throw new Error(`Erro ao tentar encontrar o produto: ${error}`);
        }
    }


}

export default new ProductRepository();


