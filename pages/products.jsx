import Layout from "@/components/layout";
import Link from "next/link";


const Product = () => {

return <Layout>

    <Link href={'/products/new'}> add new product</Link>
    
</Layout>
}
    
export default Product;