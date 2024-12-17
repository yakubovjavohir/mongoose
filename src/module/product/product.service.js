import { ProductData } from "../../lib/productData.js"
import { ProductModel } from "../../lib/productEntity.js"
import { ResData } from "../../lib/resData.js"
import { ObjectId } from 'mongodb'

class ProductService {
    #repository
    constructor(repository){
        this.#repository = repository
    }



    async getAll(){
        const data = await this.#repository.find()
        const resdata = new ResData(200, "success", data)
        return resdata
    }


    async createProducts(dto){
        const productDat = new ProductData(dto.name, dto.price, dto.count)
        const createData = await this.#repository.create(productDat)
        const resdata = new ResData(201, "created products", createData)
        return resdata
    }

    async deleteByOneID(id) {
        const mongo_data = await this.#repository.find();

        const find = mongo_data.find((el) => el._id.toString() === id);
        if (!find) {
            const resdata = new ResData(404, "not found");
            return resdata;
        }

        await this.#repository.deleteOne({ _id: new ObjectId(id) });    
        const resdata = new ResData(200, "delete product");
        return resdata;
    }


    async updateByID_put(id, data){
        const mongo_data = await this.#repository.find();

        const find = mongo_data.find((el) => el._id.toString() === id);
        if (!find) {
            const resdata = new ResData(404, "not found");
            return resdata;
        }

        await this.#repository.updateOne(
            {_id: new ObjectId(id)},
            {$set : {name : data.name, price : data.price, count : data.count}}
        );    
        const resdata = new ResData(200, "update data");
        return resdata;
    }

    async updateByID_patch(id, data){
        const mongo_data = await this.#repository.find();

        const find = mongo_data.find((el) => el._id.toString() === id);
        if (!find) {
            const resdata = new ResData(404, "not found");
            return resdata;
        }

        await this.#repository.updateOne(
            {_id: new ObjectId(id)},
            {$set : {price : data}}
        );    
        const resdata = new ResData(200, "price update");
        return resdata;
    }
}


const productService = new ProductService(ProductModel)
export {productService}