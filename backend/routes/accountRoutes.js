import express from 'express'
const router = express.Router()
import {registerSupplier} from '../controllers/accountController.js'

router.post('/register', registerSupplier)

export default router