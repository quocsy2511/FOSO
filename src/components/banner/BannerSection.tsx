import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const BannerSection = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center md:px-[43px] md:mb-[96px]">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/lich.png"
          alt="schedule"
          width={195}
          height={188}
          className="mdd:hidden"
        />
      </motion.div>

      <motion.div
        className="relative flex flex-col justify-center items-center py-[48px] gap-y-16 w-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        layout
      >
        <div className="flex- flex-row justify-center items-center mdd:hidden ">
          <span className="text-sm font-normal text-typo-black-2">
            Trang chủ {">"}{" "}
          </span>
          <span className="text-sm font-normal text-typo-black-2">
            Tài nguyên {">"}
          </span>
          <span className="text-sm font-semibold text-typo-black-3"> Blog</span>
        </div>

        <div className="text-center bg-transparent">
          <p className="font-normal text-[64px] text-typo-black-3 leading-tight mb-2">
            Blog{" "}
            <span className="font-extrabold bg-gradient-to-r from-[#53B086] via-[#85EEB3] to-[#53B086] bg-clip-text text-transparent">
              FOSO
            </span>{" "}
            - <br />
            Cập Nhật Tin Tức{" "}
            <span className="font-extrabold relative inline-block">
              <span className="z-10 relative">Mới Nhất</span>
              <span className="bg-backgroundColor-green-4 absolute left-0 bottom-1 w-full h-[24px] rounded-[40px] z-[1] " />
            </span>
          </p>

          <p className="font-medium text-lg text-typo-gray-1">
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/hand.png"
          alt="schedule"
          width={195}
          height={188}
          className="mdd:hidden"
        />
      </motion.div>
    </div>
  );
};

export default BannerSection;
