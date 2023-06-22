import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connection from './config/db.js';
import authRoutes from './routes/authroute.js';
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors"
import path from "path"
import {fileURLToPath} from "url"
dotenv.config();

connection();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/v1/auth' , authRoutes)
app.use('/api/v1/category' , categoryRoutes)
// app.use('api/v1/product' , productRoutes)
app.use("/api/v1/product", productRoutes);
app.use(express.static(path.join(__dirname , "./client/build")))


app.use('*' , function(req,res){
    res.sendFile(path.join(__dirname , './client/build/index.html'))
})

//PORT

const PORT = process.env.PORT;

app.listen(PORT , ()=>{
    console.log(`server will running on ${PORT}`)
})
