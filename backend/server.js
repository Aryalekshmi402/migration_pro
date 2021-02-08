import express from 'express'
import dotenv from 'dotenv'
import accountRoutes from './routes/accountRoutes.js'
import connectDB from './config/db.js'
import cors from 'cors'
import http from 'http'


dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/account', accountRoutes)

app.get('/',(req, res)=>{
    res.send('API running')
})

app.listen(5000,console.log('server running'))
