import { productService } from "./product.service.js"

class ProductController{
    #service
    constructor(service){
        this.#service = service
    }

    async getAll(req, res, next){
        const data = await this.#service.getAll()
        res.status(data.statusCode).json(data)
    }


    async create(req, res, next){
        const data = req.body
        const resdata = await this.#service.createProducts(data)
        res.status(resdata.statusCode).json(resdata)
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

    async updateByID_put(req, res, next){
        try {
            const id = req.params.id
            const data = req.body
            const resdata = await this.#service.updateByID_put(id, data)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }

    async updateByID_patch(req, res, next){
        try {
            const id = req.params.id
            const data = req.body.price
            const resdata = await this.#service.updateByID_patch(id, data)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }
}

const productController = new ProductController(productService)

export {productController}