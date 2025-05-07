import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["All", "Research", "Robotics", "Software", "CAD"];

export default function Tabs({ onTabChange }) {
  const [active, setActive] = useState("All");

  return (
    <div className="flex space-x-4 mb-6">
      {tabs.map((tab) => (
        <motion.button
          key={tab}
          onClick={() => {
            setActive(tab);
            onTabChange(tab);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
            active === tab
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  );
}
