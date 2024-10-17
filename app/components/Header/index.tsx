import Image from "next/image";
import logo from "@/public/static/images/logo-eco-village-sai-gon-river.png";
import flagVN from "@/public/static/images/vi.svg";
import flagUSA from "@/public/static/images/en-us.svg";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import clsx from "clsx";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify the weights you want to use
});
export default function Header() {
  return (
    <header>
      <nav className="fixed top-0 z-10 left-0 right-0">
        <section
          style={{ backgroundColor: "#171C32F0" }}
          className=" px-9 relative"
        >
          <div className="flex items-center max-w-[1140px] mx-auto h-full">
            <div className="w-1/6 px-4 py-2.5">
              <Link href={"/"}>
                <Image src={logo} alt="logo" objectFit="cover" height={68} />
              </Link>
            </div>
            <div className="w-3/4 flex justify-end h-full">
              <ul className="flex justify-end">
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-[16px] font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/"}
                  >
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-[16px] font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/about"}
                  >
                    Tổng quan
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-[16px] font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/contact"}
                  >
                    Vị trí
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-[16px] font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/contact"}
                  >
                    Tiện ích
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-[16px] font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/contact"}
                  >
                    Phân khu
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-[16px] font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/contact"}
                  >
                    Tin tức
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-5 font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/contact"}
                  >
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-1">
              <div className="px-[15px]">
                <div className="flex gap-1">
                  <Image
                    src={flagVN}
                    alt="flagUSA"
                    objectFit="cover"
                    width={24}
                  />
                  <Image
                    src={flagUSA}
                    alt="flagUSA"
                    objectFit="cover"
                    width={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
}
