import express from 'express'
const router = express.Router()
import {saleFormdata,suggestions,itemDetails} from '../controllers/saleController.js'

router.post('/sale_form_data', saleFormdata)
router.post('/suggestions', suggestions)
router.post('/item-details', itemDetails)



export default router