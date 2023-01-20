// import Product from "./model/product-Schema.js";
import { products } from "./constants/data.js"

const DefaultData = async () => {
  try{
    // await Product.deleteMany({});
    await Product.insertMany(products);

    console.log('Data import successfuly');
  }catch(error){
        console.log('Error while inserting default data ',error.message);
  }
}

export default DefaultData;
