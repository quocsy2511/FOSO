import ArrowRight from "@/components/svg/ArrowRight";
import Clock from "@/components/svg/Clock";
import DateTime from "@/components/svg/DateTime";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type BlogCard = {
  classNameImage?: string;
};

const BlogCard = ({ classNameImage }: BlogCard) => {
  return (
    <Link
      href="/blog"
      className="group flex flex-col min-w-[400px] max-w-[505px] pb-1  hover:bg-white rounded-[24px] cursor-pointer text-typo-gray-1 hover:text-backgroundColor-green-1"
    >
      <div
        className={twMerge(
          "relative w-full min-h-[300px] rounded-[24px] overflow-hidden",
          classNameImage
        )}
      >
        <Image
          src="/images/image.png"
          alt="blog"
          fill
          quality={100}
          className="rounded-[24px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 absolute inset-0"
        />
      </div>
      <div className="flex-col flex gap-y-4 mt-6 px-2 ">
        <div className="rounded-lg bg-backgroundColor-blue px-2 py-1 w-fit">
          <p className="font-medium text-xs text-typo-blue">Quản Lý Sản Xuất</p>
        </div>

        <p className="text-2xl font-extrabold ">
          Tại sao BOM quan trọng trong quản lý sản xuất?
        </p>

        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row justify-start items-center border-r border-r-[#D9E1E7] pr-3 gap-x-[3px]">
            <DateTime />
            <p className="font-medium text-base text-typo-gray-3">17/11/2922</p>
          </div>

          <div className="flex flex-row justify-start items-center pl-3 gap-x-[3px]">
            <Clock />
            <p className="font-medium text-base text-typo-gray-3">
              10 phút đọc
            </p>
          </div>
        </div>

        <div className=" flex flex-row items-center gap-x-6 py-[10px] mx-4 text-typo-gray-3 hover:text-typo-blue">
          <p className="font-semibold text-lg ">Khám phá thêm</p>
          <ArrowRight />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
