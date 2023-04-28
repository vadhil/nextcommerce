import Layout from "@/components/layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


const Product = () => {

    const [products, setProducts] = useState([])
    useEffect(()=> {
        const fetchProducts = async()=>{
               const datas = await axios.get('/api/products')
                setProducts(datas.data)
        };
        fetchProducts()
       
    }, [])

return <Layout>

    <Link href={'/products/new'}> add new product</Link>
    

    <div>
        {products.map((data)=>{ 
           return(
               <div>
                   <h1>{data.title}</h1>
                    <p>{data.desc}</p>
                    <h3>{data.price}</h3>
               </div>
               
               )
        })}
    </div>
    
</Layout>
}
    
export default Product;

