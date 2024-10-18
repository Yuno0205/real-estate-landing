import Image from "next/image";
import Header from "./components/Header";
import img from "@/public/static/images/congvienvensong.jpg";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
}
