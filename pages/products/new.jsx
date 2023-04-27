import Layout from "@/components/layout";


export default function NewProduct (){

    return (
        <Layout>
            <h1 className="">New Product</h1>
            <div className="flex flex-col flex-wrap">
            <input type="text" placeholder="product name" />
            <textarea name="" placeholder="description" id="" cols="30" rows="10"></textarea>
            </div>
        </Layout>
    )
}