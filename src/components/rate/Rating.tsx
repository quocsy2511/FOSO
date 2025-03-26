import React, { ReactNode } from "react";
import { motion } from "framer-motion";
type ReactBlogProps = {
  title: string;
  icon: ReactNode;
  isSelected: boolean;
  onClick: () => void;
};

const ReactBlog = ({ icon, title, isSelected, onClick }: ReactBlogProps) => {
  return (
    <motion.div
      className={`rounded-[4px] gap-y-1 flex flex-col py-1 px-[25px] items-center justify-center border border-transparent 
       hover:border-backgroundColor-green-5 hover:text-backgroundColor-green-5 text-typo-gray-1 cursor-pointer 
       ${
         isSelected
           ? "text-backgroundColor-green-5 border-backgroundColor-green-5"
           : ""
       }`}
      onClick={onClick}
      whileHover="hover"
    >
      <motion.div
        variants={{
          hover: { y: [-5, 0, -5] },
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {icon}
      </motion.div>

      <span className="font-bold">{isSelected ? 1 : 0}</span>
      <p className="font-medium whitespace-nowrap">{title}</p>
    </motion.div>
  );
};

export default ReactBlog;
