import "dotenv/config.js"
import express from 'express';
import cors from 'cors';
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
import morgan from "morgan";



const app = express();
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors());
app.use(express.json());
app.use(morgan(':date[iso] :method :url: http-version: user-agent :status (:response-time ms)'));

//Load Routes
app.use("/api/user", userRoutes)

//Database Connection
connectDB(DATABASE_URL)


app.listen(port, () => {
    console.log(`Server is listening at ${port}`)
}) 