"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Calistoga, Roboto } from "next/font/google";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["500"],
});
export default function BlueZone() {
  return (
    <div className="min-h-[800px] bg-[#DCF1FF] bg-[url('/static/images/blue-zone.png')] bg-center bg-no-repeat py-[160px]">
      <div className="relative mx-auto flex min-h-[300px] max-w-[1140px] justify-center">
        <div className="flex min-h-1 w-2/3 flex-col items-center">
          {/* Play button */}
          <div className="relative mb-12 flex h-[75px] w-[75px] items-center justify-center rounded-full bg-[#FF7A56]">
            {/* <motion.div
              initial={{ opacity: 1, scale: 0.1 }}
              animate={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-[#FF7A56] absolute"
            ></motion.div> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-8"
              color="#fff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </div>

          {/* Title */}
          <div className="mb-12 text-center">
            <h2
              className={clsx("text-6xl font-semibold", calistoga.className)}
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #3F737B 0%, #2065AD 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BLUE ZONES
            </h2>
          </div>

          {/* Quote */}
          <div
            className="mb-6 w-full border-l-4 pl-8"
            style={{
              borderColor: "#232323",
              borderLeftWidth: "5px",
            }}
          >
            <div className="flex flex-col justify-between gap-3">
              {/* Book icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              <span className="font-semibold text-[#25436E]">
                Khái niệm được dùng chỉ ra những vùng địa lý trên thế giới, nơi
                phần lớn con người sống trường thọ hơn bất kì nơi nào trên thế
                giới, thường đạt đến hơn 100 tuổi
              </span>
            </div>
          </div>

          <div className="mb-6">
            <p
              className={clsx(roboto.className, "leading-loose text-[#1F3A5B]")}
            >
              Trên khắp thế giới, có năm vùng đất được tìm ra với cái tên “Blue
              Zones gồm: Vùng Loma Linda (bang California, Mỹ), Đảo Ikaria (Hy
              Lạp), Okinawa (Nhật Bản), Sardinia (Italy) và bán đảo Nicoya
              (Costa Rica). Điểm chung của những vùng đất này là thiên nhiên
              trong lành, con người sống gần gũi với thiên nhiên trong từng hơi
              thở, bước đi, bữa ăn, giấc ngủ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
