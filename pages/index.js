import styles from "@/styles/Home.module.css"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | BPIT</title>
        <meta name="keywords" content="NatthanonPl,ร้านค้า,ขายเสื้อผ้า"></meta>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <Image src="/12067513_4890261.svg" width={300} height={300} alt="logo"/>
        <p>Welcome</p>
        <Link href="/products" className={styles.btn}>product more</Link>
      </div>
    </>
  );
}
