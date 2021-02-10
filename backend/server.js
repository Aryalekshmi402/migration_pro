import express from 'express'
import dotenv from 'dotenv'
import accountRoutes from './routes/accountRoutes.js'
import purchaseRoutes from './routes/purchaseRoutes.js'
import saleRoutes from './routes/saleRoutes.js'
import userRoutes from './routes/userRoutes.js'


import connectDB from './config/db.js'
import cors from 'cors'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/account', accountRoutes)

app.use('/api/purchase', purchaseRoutes)

app.use('/api/sale', saleRoutes)

app.use('/api/user', userRoutes)


app.get('/',(req, res)=>{
    res.send('API running')
})

app.listen(5000,console.log('server running'))
