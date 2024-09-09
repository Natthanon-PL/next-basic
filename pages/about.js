import styles from "@/styles/About.module.css"
import Image from "next/image";
import Head from "next/head";

export default function About(){
    return(
        <>
        <Head>
            <title>About | BPIT</title>
            <meta name="keywords" content="NatthanonPl,ร้านค้า,ขายเสื้อผ้า"></meta>
        </Head>
        <div className={styles.container}>
            <h1 className={styles.title}>About</h1>
            <Image src="/12067513_4890261.svg" width={300} height={300} alt="logo"/>
        </div>
        </>
        
    )
}