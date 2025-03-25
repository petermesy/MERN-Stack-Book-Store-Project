import mongoose, { trusted } from "mongoose";

const bookSchema=mongoose.Schema(
    {
        title:{
            type:String,
            requird:true
        },
        author:{
            type:String,
            required:true
        }, 
        publishYear:{
            type:Number,
            required:true
        },

    },
    {
        timestamps:true
    }
)
export const Book=mongoose.model('store',bookSchema)