import Image from "next/image";
import React from "react";

const Social = () => {
  return (
    <div className="flex flex-col justify-center absolute top-[3%] left-[3%] gap-y-2">
      <p className="font-extrabold text-base text-typo-gray-1">Chia sẻ</p>
      <div className="rounded-2xl border border-backgroundColor-green-2 p-3 hover:bg-backgroundColor-green-4">
        <Image src="/svgs/zalo.svg" alt="zalo" width={24} height={24} />
      </div>
      <div className="rounded-2xl border border-backgroundColor-green-2 p-3 hover:bg-backgroundColor-green-4">
        <Image src="/svgs/facebook.svg" alt="zalo" width={24} height={24} />
      </div>
      <div className="rounded-2xl border border-backgroundColor-green-2 p-3 hover:bg-backgroundColor-green-4">
        <Image src="/svgs/x.svg" alt="zalo" width={24} height={24} />
      </div>
      <div className="rounded-2xl border border-backgroundColor-green-2 p-3 hover:bg-backgroundColor-green-4">
        <Image src="/svgs/linkined.svg" alt="zalo" width={24} height={24} />
      </div>
      <div className="rounded-2xl border border-backgroundColor-green-2 p-3 hover:bg-backgroundColor-green-4">
        <Image src="/svgs/reddit.svg" alt="zalo" width={24} height={24} />
      </div>
    </div>
  );
};

export default Social;
