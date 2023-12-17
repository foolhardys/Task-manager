import express from 'express'
import path from 'path'
import tasks from './routes/tasks'
import { DB_URL, PORT } from './config'
import connectDB from './db/connect'

const app = express()

// middlewares
app.use(express.static('./public'))
app.use(express.json())



// routes

app.use('/api/v1/tasks', tasks)

// server listening
const APP_PORT = PORT || 3000

const start = async () => {
    try {
        await connectDB(DB_URL)
        app.listen(APP_PORT, () => {
            console.log(`Server is listening on port : ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()


