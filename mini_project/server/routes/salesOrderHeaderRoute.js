import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexCtrl.salesOrHeCtrl.findAll)

export default router