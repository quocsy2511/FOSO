import ArrowUp from "@/components/svg/ArrowUp";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const CardVertical = ({ children, className }: CardProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col py-[37px] max-w-[366px] rounded-3xl overflow-hidden bg-linear-card-vertical-2",
        className
      )}
    >
      {children}

      <div className="w-full px-7 pb-6">
        <div className="rounded-[40px] border border-white text-white hover:border-backgroundColor-green-1 hover:text-backgroundColor-green-1 py-2 px-6 flex flex-row items-center justify-between gap-x-8 w-full cursor-pointer">
          <p className="font-bold text-[14px] ">Trải Nghiệm Ngay</p>
          <ArrowUp />
        </div>
      </div>
    </div>
  );
};

export default CardVertical;
