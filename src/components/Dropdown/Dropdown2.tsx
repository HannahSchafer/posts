// Dropdown.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Dropdown.css";

const GROUPS = [
  { name: "location", label: "Location" },
  { name: "author", label: "Author" },
  { name: "week", label: "Week" },
];
const Dropdown2 = ({
  selectedGroup,
  setSelectedGroup,
}: {
  selectedGroup: string;
  setSelectedGroup: (group: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [position, setPosition] = useState({ top: 0, left: 0 });

  const toggleDropdown = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    // setPosition({
    //   top: rect.bottom + window.scrollY,
    //   left: rect.left + window.scrollX,
    // });
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (selectedGroup: any) => {
    setSelectedGroup(selectedGroup.name);
    closeDropdown();
  };

  return (
    <div className="dropdown-wrapper">
      <div>Group by: </div>
      <div onClick={toggleDropdown}>{selectedGroup}</div>
      {isOpen &&
        ReactDOM.createPortal(
          <div
            className="dropdown"
            // style={{ top: position.top, left: position.left }}
          >
            <ul>
              {GROUPS.map((group, index) => (
                <li key={index} onClick={() => handleOptionClick(group)}>
                  {group.name}
                </li>
              ))}
            </ul>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Dropdown2;
