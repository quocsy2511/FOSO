"use client";
import BannerSection from "@/components/banner/BannerSection";
import BlogCard from "@/components/card/BlogCard";
import CardVertical from "@/components/card/CardVertical";
import Main from "@/components/layout/Main";
import Paging from "@/components/paging/Paging";
import ArrowUp from "@/components/svg/ArrowUp";
import Search from "@/components/svg/Search";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
const dataCategory = [
  {
    id: 1,
    title: "Tất cả",
    count: 108,
  },
  {
    id: 2,
    title: "Thiết Kế Website",
    count: 36,
  },
  {
    id: 3,
    title: "Thiết Kế App Mobile",
    count: 13,
  },
  {
    id: 4,
    title: "Quản Lý Sản Xuất",
    count: 25,
  },
  {
    id: 5,
    title: "Quản Lý Bán Hàng",
    count: 22,
  },
  {
    id: 6,
    title: "Báo Chí Nói Về FOSO",
    count: 7,
  },
  {
    id: 7,
    title: "Tin Tức FOSO",
    count: 5,
  },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <Main>
      <BannerSection />
      <motion.div
        className="relative mx-auto max-w-[1440px] flex flex-col gap-y-[72px]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className=" flex md:flex-row flex-col justify-between items-start gap-x-8 w-full mdd:px-1">
          {/* right */}
          <div className="flex flex-col md:w-[75%] gap-y-6 mdd:px-1">
            <p className="font-extrabold text-typo-black-3 text-4xl">
              Tất cả bài viết
            </p>
            {/* card intro */}
            <div className="relative rounded-[40px] bg-linear-card-horizontal flex flex-row justify-between pt-[60px] pb-[50px] md:pl-[59px] pl-4 overflow-hidden">
              <div className=" max-w-[550px]">
                <p className="font-bold text-white text-4xl w-4/5 mb-8">
                  Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
                </p>

                <div className="rounded-[40px] border border-white text-white w-fit py-2 md:px-6 px-3 flex flex-row items-center md:gap-x-8 gap-x-2 hover:border-backgroundColor-green-1 hover:text-backgroundColor-green-1 hover:bg-white">
                  <p className="font-bold text-[14px] ">Tham Gia Ngay</p>
                  <ArrowUp />
                </div>
              </div>
              <Image
                src="/svgs/group.svg"
                alt="group"
                width={400}
                height={0}
                className="absolute bottom-0 right-[30px] md:w-[400px] w-[200px]"
              />
            </div>

            <div className="w-full grid md:grid-cols-2 gap-16">
              {/* card blog */}
              <BlogCard classNameImage="md:h-[475px]" />
              <BlogCard classNameImage="md:h-[475px]" />
              <BlogCard classNameImage="md:h-[475px]" />
              <BlogCard classNameImage="md:h-[475px]" />
            </div>
          </div>

          {/* left */}
          <div className="flex-1 mdd:w-full">
            <h3 className="font-extrabold text-typo-black-3 text-2xl mb-6">
              Tìm Kiếm
            </h3>

            {/* search */}
            <div className="w-full rounded-xl bg-white flex flex-row items-center gap-x-3 px-2 py-3 shadow-md mb-8">
              <input
                className="w-4/5 px-4 py-2 outline-none focus:ring-0 focus:border-transparent"
                placeholder="Tìm kiếm bài viết"
              />
              <button className="bg-backgroundColor-green-2 p-3 rounded-xl ">
                <Search />
              </button>
            </div>

            {/* category */}
            <div className="flex flex-col gap-y-6 mb-8">
              <h3 className="font-extrabold text-typo-black-3 text-2xl m">
                Danh Mục
              </h3>

              <div className="flex flex-col gap-y-4">
                {dataCategory.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex flex-row justify-between items-center font-medium text-lg pb-2 text-typo-gray-1 hover:text-typo-blue cursor-pointer ${
                      index !== dataCategory.length - 1
                        ? "border-b border-[#F1F5F7]"
                        : ""
                    }`}
                  >
                    <p className="">{item.title}</p>
                    <p className="text-typo-gray-3">{item.count}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* card */}
            <div className="flex flex-col gap-y-8 mdd:items-center">
              <CardVertical>
                <div className="flex flex-col w-full relative items-end mb-[72px]">
                  <Image
                    src="/images/card1.png"
                    alt="card"
                    height={262}
                    width={400}
                    className="mb-[72px]"
                  />

                  <Image
                    src="/images/card1-free.png"
                    alt="free"
                    height={87}
                    width={320}
                    className="mr-6"
                  />

                  <div className="absolute bottom-0 left-[34px] ">
                    <Image
                      src="/images/card1-robot.png"
                      alt="robot"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
              </CardVertical>

              <CardVertical className="bg-linear-card-vertical">
                <div className="w-full flex flex-col items-center justify-center gap-y-6 mb-6">
                  <Image
                    src="/images/group-card.png"
                    alt="group"
                    height={400}
                    width={472}
                    className="object-cover"
                  />

                  <p className="px-6 text-white text-xl font-bold text-start">
                    Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát
                    triển!
                  </p>
                </div>
              </CardVertical>
            </div>
          </div>
        </div>

        <Paging
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </motion.div>
    </Main>
  );
}
