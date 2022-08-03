import 'dotenv/config';
import express from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import models, {sequelize} from "./models/init-models";
import routes from "./routes/indexRoutes"

const port  = process.env.PORT || 3000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use(helmet())
app.use(cors())
app.use(async(req,res,next) => {
    req.context = {models}
    next()
})

app.use('/sales_order_head',routes.SalesOrHeRoute)
app.use('/sales_order_detail',routes.SalesOrDetRoute)

const dropDatabaseSync = false

sequelize.sync({force : dropDatabaseSync}).then(async() => {
    if(dropDatabaseSync) {
        console.log("Database do not drop")
    }
    app.listen(port,() => console.log("Server is listen on port "+port))
})

export default app