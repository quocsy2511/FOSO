import CaretDown from "@/components/svg/CaretDown";
import Dot from "@/components/svg/Dot";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className=" w-full flex flex-row items-center justify-center py-6">
      <div className="rounded-[40px] bg-white shadow-lg py-3 md:px-[150px] flex flex-row justify-between items-center gap-x-16 px-4 mdd:w-full">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={124}
          height={55}
          className="cursor-pointer"
        />

        {/* navlink */}
        <div className="flex flex-row justify-center gap-x-2 items-stretch cursor-pointer mdd:hidden ">
          <div className="px-2">
            <p className="text-sm font-medium text-typo-black-1">
              Về Chúng tôi
            </p>
          </div>
          <div className="px-2 flex flex-row justify-center items-center gap-x-2">
            <span className="text-sm font-medium text-typo-black-1 ">
              Giải pháp
            </span>
            <CaretDown />
          </div>

          <div className="relative px-2 flex flex-row justify-center items-center gap-x-2">
            <span className="text-sm font-bold text-typo-black-1 ">
              Tài nguyên
            </span>
            <CaretDown />
            <Dot className="absolute bottom-[-10px] left-[40%]" />
          </div>

          <div className="px-2">
            <p className="text-sm font-medium text-typo-black-1">Liên hệ</p>
          </div>
        </div>

        {/* button langue */}
        <div className="flex flex-row justify-center items-center gap-x-2 cursor-pointer mdd:hidden ">
          <div className="rounded-[40px] bg-[#E9EAEA] border border-[#DADBDB] flex flex-row gap-x-3 justify-center py-2 px-[6px]">
            <Image src="/svgs/vnflag.svg" alt="flag" width={24} height={24} />
            <div className="flex flex-row justify-center items-center gap-x-1">
              <span className="font-medium text-[14px] text-typo-black-1">
                VI
              </span>
              <CaretDown />
            </div>
          </div>

          <div className="rounded-[40px] bg-backgroundColor-green-1 flex flex-row gap-x-3 justify-center items-center py-[8px] px-[12px]">
            <p className="font-bold text-sm text-typo-green">
              Trở Thành Khách Hàng
            </p>
            <Image
              src="/svgs/ArrowUpRight.svg"
              alt="customer"
              width={22}
              height={22}
            />
          </div>
        </div>

        <div className="hidden mdd:block">
          <CaretDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
