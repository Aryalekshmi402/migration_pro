import express from 'express'
const router = express.Router()
import {getData,mainFormdata,formData,saveData} from '../controllers/purchaseController.js'

router.post('/mainform_data', mainFormdata)
router.get('/getdata', getData)
router.post('/form_data', formData)
router.post('/savedata', saveData)


export default router