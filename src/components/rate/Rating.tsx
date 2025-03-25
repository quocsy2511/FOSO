import React, { ReactNode } from "react";

type ReactBlogProps = {
  count: number;
  title: string;
  icon: ReactNode;
};
const ReactBlog = ({ count, icon, title }: ReactBlogProps) => {
  return (
    <div className="rounded-[4px] gap-y-1 flex flex-col py-1 px-[25px] items-center justify-center border border-transparent hover:border-backgroundColor-green-5 hover:text-backgroundColor-green-5 text-typo-gray-1">
      {icon}
      <span className="font-bold">{count}</span>
      <p className="font-medium whitespace-nowrap">{title}</p>
    </div>
  );
};

export default ReactBlog;
