import express from 'express'
import cors from 'cors'
import errorHandlerMiddleware from './middlewares/errorHandler.js'
import loggerMiddleware from './middlewares/logger.js'
import destinationRouter from './routes/destinationRouter.js'


const PORT = 8000

const app = express()

//Middlewares
app.use(express.json())
app.use(loggerMiddleware)


// CORS-inställningar
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Lägg till alla metoder som din frontend-applikation kan använda
    allowedHeaders: ['Content-Type', 'Authorization'], // Lägg till alla headers som din frontend-applikation skickar
    credentials: true, // Tillåt att cookies skickas över CORS
    optionsSuccessStatus: 200 // Tillåt att response status 200 skickas för OPTIONS-request
};

app.use(cors(corsOptions));

//Routes

console.log("CREATE DEST Server")
app.use('/create', destinationRouter)
app.use('/destinations', destinationRouter)
app.use('/save-trip', destinationRouter)
app.use('/delete-trip', destinationRouter)

app.get('/test', (req, res) => {
    res.send('Server is running and reachable!')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`)
})



app.get('/error', (req, res, next) =>{
    const error = new Error('Page not found')
    error.status = 404
    next(error)
})

//Middleware for error handling

app.use(errorHandlerMiddleware)