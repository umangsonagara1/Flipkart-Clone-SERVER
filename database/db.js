import mongoose from 'mongoose';

export const connection = async (err,res) => {
    const URL = `mongodb+srv://umang:umang1232000@ecommerce-web.fv46bvr.mongodb.net/Project0?retryWrites=true&w=majority` ;
  try{
    mongoose.set('strictQuery', true); //Error
    await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser:true});
    console.log('Database connected Successfully')
  }catch(error){
    console.log('Error while connecting with the database ', error.message);
  }
}

export default connection;