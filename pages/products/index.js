import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Products.module.css"
import Link from "next/link";
import ProductsDetaill from "./componentsTest";
import { useEffect, useState } from "react";
//https://dummyjson.com/products?limit=12

export async function getStaticProps(){
  const res = await fetch("https://dummyjson.com/products?limit=6")
  const data = await res.json()
  console.log(data)
  return{
    props:{products:data.products}
  }
}

export default function Index({products}) {

  const [state_id, setStateid] = useState("");
  const [state_title, setStatetitle] = useState("");
  useEffect(() => {

  },[])

    return (
      <>
        <Head>
            <title>สินค้าทั้งหมด | NatthanonPl</title>
            <meta name="keywords" content="NatthanonPl,ร้านค้า,ขายเสื้อผ้า"></meta>
        </Head>
        <div className={styles.container}>
          {products.map(item=>{
            if (item.id) {
              return (
                <div key={item.id} onClick={() => {
                  console.log(`click item id : ${item.id}`)
                  setStateid(item.id)
                  setStatetitle(item.title);
                  return <ProductsDetaill id={item.id} title={item.title}></ProductsDetaill>
                }}>
                <div>
                  <h2 className={styles.title}>{item.title}</h2>
                  <Image src={item.thumbnail} width={300} height={300} alt={item.title}/>
                </div>
            </div>
              )
            }
            return null;
          })}
        </div>
        <div>
        <ProductsDetaill id={state_id} title={state_title}></ProductsDetaill>
        </div>
      </>
    );
  }
