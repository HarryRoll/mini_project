import { Sequelize } from "../models/init-models";

const findAll = async(req,res) => {
    try{
    const salesOrderHeader = await req.context.models.sales_order_header.findAll()
    return res.send(salesOrderHeader)
    }catch(error){
        return res.status(404).send(error)
    }

}

export default {
    findAll
}
