
//SSR
/*
export async function getStaticPaths(){
    const res = await fetch("https://dummyjson.com/products?limit=6")
    const data = await res.json()
    const paths = data.products.map((item)=>{
        return{
            params:{id:String(item.id)}
        }
    })
    console.log(paths)
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps(params){
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/"+id)
    const data = await res.json()
    return{
      props:{product:data}
    }
}
    */
//CSR || SSG
export default function ProductsDetaill({id, title}){

    return(
        <>
            <h1>รหัสสินค้า : {id}</h1>
            <h1>ชื่อสินค้า : {title}</h1>
        </>
    )
}