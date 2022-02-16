import Head from "next/head";
import Image from "next/image";
import Banners from "../components/Banners";
import Features from "../components/Features";
import Layout from "../components/Layout";
import SliderComponent from "../components/Slider/Slider";
/* import styles from "../styles/Home.module.css"; */
import Demo from "./Demo/Demo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <SliderComponent />
        <Features />
        <Banners />
      </Layout>

      <footer></footer>
    </div>
  );
}
