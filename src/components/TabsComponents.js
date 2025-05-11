// src/components/Tabs.js
import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mb-8">
      <div className="flex space-x-4 mb-4 border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              index === activeTab
                ? 'border-b-2 border-blue-500 font-semibold'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;

