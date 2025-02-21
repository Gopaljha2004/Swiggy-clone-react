import { motion } from "framer-motion";
import React from "react";

const OptionCard = ({ options }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="p-2">
      <a target="_blank" rel="noopener noreferrer" href={options?.action?.link}>
        <img
          className="w-36 h-44 object-cover rounded-lg"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/" + options?.imageId}
          alt="option"
        />
      </a>
    </motion.div>
  );
};

export default OptionCard;
