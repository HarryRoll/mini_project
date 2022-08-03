import { sequelize } from "../models/init-models";

const findAll = async(req,res) => {
    try{
        const salesOrderDetail = await req.context.models.sales_order_detail.findAll()
        return res.send(salesOrderDetail)
    }catch(error){
        return res.status(404).send(error)
    }
}

export default {
    findAll
}