import Header from "@/components/layout/Header";
import React, { ReactNode } from "react";

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="min-h-screen flex w-full flex-col bg-[#F9FBFC]">
      {/* header */}
      <Header />
      {/* body */}
      <div className="flex-1 pb-10 ">{props.children}</div>
    </div>
  );
};

export default Main;
