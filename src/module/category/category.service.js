import {CategoryModel} from "../../lib/categoryEntity.js"
import { ResData } from "../../lib/resData.js"
import { ObjectId } from 'mongodb'
class CategoryService {
    #repository
    constructor(repository){
        this.#repository = repository
    }


    async getAll() {        
        const data = await this.#repository.find()
        console.log(data);
        const resdata = new ResData(200, "succes", data)
        return resdata
    }


    async create(dto){
        const data = await this.#repository.create({
            name: dto.name,
            desc: dto.desc
        })

        const resdata = new ResData(201, "createCategory", data)

        return resdata
    }

    async deleteByOneID(id) {
        const mongo_data = await this.#repository.find();

        const find = mongo_data.find((el) => el._id.toString() === id);
        if (!find) {
            const resdata = new ResData(404, "not found this Id");
            return resdata;
        }

        await this.#repository.deleteOne({ _id: new ObjectId(id) });    
        const resdata = new ResData(200, "delete Category");
        return resdata;
    }




    async updateByID_post(id, data){
        const mongo_data = await this.#repository.find();

        const find = mongo_data.find((el) => el._id.toString() === id);
        if (!find) {
            const resdata = new ResData(404, "not found this Id");
            return resdata;
        }

        await this.#repository.updateOne(
            {_id: new ObjectId(id)},
            {$set : {name : data.name, desc : data.desc}}
        );    
        const resdata = new ResData(200, "update data");
        return resdata;
    }


    async updateByID_patch(id, data){
        const mongo_data = await this.#repository.find();

        const find = mongo_data.find((el) => el._id.toString() === id);
        if (!find) {
            const resdata = new ResData(404, "not found this Id");
            return resdata;
        }

        await this.#repository.updateOne(
            {_id: new ObjectId(id)},
            {$set : {name : data}}
        );    
        const resdata = new ResData(200, "name update");
        return resdata;
    }
    
}


const categoryservice = new CategoryService(CategoryModel)

export {categoryservice}