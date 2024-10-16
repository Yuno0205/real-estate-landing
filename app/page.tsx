import Image from "next/image";
import Header from "./components/Header";
import img from "@/public/static/images/congvienvensong.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: "url(/static/images/congvienvensong.jpg)",
        }}
        className="min-h-screen bg-cover bg-center bg-no-repeat"
      >
        Hahah
      </div>
    </>
  );
}
