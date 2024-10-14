import Image from "next/image";
import logo from "@/public/static/images/logo-eco-village-sai-gon-river.png";
export default function Header() {
  return (
    <header>
      <nav className="fixed top-0 z-10 left-0 right-0">
        <section className="bg-blue-950 px-[35px] relative">
          <div className="flex">
            <div className="w-1/6">
              <Image src={logo} alt="logo" objectFit="cover" />
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
}
