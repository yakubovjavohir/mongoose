import {categoryservice} from "./category.service.js"
class CategoryController {
    #service
    constructor(service) {
        this.#service = service
    }


    async getAll(req, res, next){
        try {
            const resdata = await this.#service.getAll()
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            const body = req.body
            const resdata = await this.#service.create(body)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async deleteById(req, res, next) {
        try {
            const id = req.params.id;
            const resdata = await this.#service.deleteByOneID(id);
    
            res.status(resdata.statusCode).json(resdata);
        } catch (error) {
            next(error);
        }
    }

    async updateByID_post(req, res, next){
        try {
            const id = req.params.id
            const data = req.body
            const resdata = await this.#service.updateByID_post(id, data)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }
    

    async updateByID_patch(req, res, next){
        try {
            const id = req.params.id
            const data = req.body.name
            const resdata = await this.#service.updateByID_patch(id, data)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }
}

const categoryController = new CategoryController(categoryservice)

export {categoryController}