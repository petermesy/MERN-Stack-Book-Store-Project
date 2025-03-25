import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import { PORT } from "./config.js"
import bookRoutes from './Routes/bookRoutes.js'

const app=express();
app.use(cors())
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type'],
//     })
// );
app.use(express.json())


app.get('/',(req,res)=>{
    console.log(req)
    return res.status(234).send('Welcome to MERN Stack Turorial');
    
});
app.use('/books',bookRoutes)

mongoose.connect("mongodb://localhost:27017/Bookstore")
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening  to port:${PORT}`);
        
    });
})
.catch((error)=>{
    console.log(error);
    
})



