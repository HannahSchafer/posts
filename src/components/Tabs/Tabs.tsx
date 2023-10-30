import { useState } from "react";
import { GROUP_BY_OPTS } from "../../constants";
import "./Tabs.css";

function Tabs({ selectedGroup, setSelectedGroup }: any) {
  const handleSelect = (selectedOpt: any) => {
    setSelectedGroup(selectedOpt);
  };
  return (
    <div className="tabs-wrapper">
      <div>Group by: </div>
      {GROUP_BY_OPTS.map((opt, idx) => {
        return (
          <div
            className={`tab ${selectedGroup === opt.name ? "selected" : ""}`}
            key={idx}
            onClick={() => handleSelect(opt.name)}
          >
            {opt.label}
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
