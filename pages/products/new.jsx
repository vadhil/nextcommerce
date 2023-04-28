import Layout from "@/components/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function NewProduct (){
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [goToProduct, setGoToProduct]= useState(false)
    const router = useRouter();
      
    const createProduct = async (e) => {
        e.preventDefault();
        const data = {title, desc, price}
        await axios.post('/api/products', data) //data pergi ke api/product
        setGoToProduct(true)
    }
    if (goToProduct) {
        router.push('/products');
    }
 

    return (
        <Layout>
            <form onSubmit={createProduct} action="">

            <h1 className="">New Product</h1>
            <div className="flex flex-col flex-wrap">
            <label htmlFor="">title</label>
            <input onChange={(e)=>setTitle(e.target.value)}
            type="text" placeholder="product title" name="title" value={title}/>
            <label htmlFor="">description</label>
            <textarea onChange={(e)=>setDesc(e.target.value)} placeholder="description" value={desc} id="" cols="30" rows="10"></textarea>
            <label htmlFor="">price</label>
            <input onChange={(e)=>setPrice(e.target.value)}
            type="number" placeholder="price" value={price}/>
            </div>
            <button type="submit">create</button>
            </form>

        </Layout>
    )
}