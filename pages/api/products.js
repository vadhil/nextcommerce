import { mongooseConnect } from "@/lib/mongoose";
import {Product} from '@/models/productModel.js'


export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    if( method === "GET"){
        res.json(await Product.find())
    }

    if (method === 'POST'){
        const {title, desc, price} = req.body
        const ProductDoc = new Product({
            title, desc, price
        })
        ProductDoc.save().then((doc)=>{
            console.log(doc);
        }).catch((err) => {console.log(err);})
        res.json(ProductDoc)
    }
  }
  
  