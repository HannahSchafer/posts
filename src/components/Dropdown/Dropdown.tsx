import { useState } from "react";
import "./Dropdown.css";

const GROUPS = [
  { name: "location", label: "Location" },
  { name: "author", label: "Author" },
  { name: "week", label: "Week" },
];

const Dropdown = ({
  selectedGroup,
  setSelectedGroup,
}: {
  selectedGroup: string;
  setSelectedGroup: (group: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown-container">
      <div>Group by: </div>
      <div>
        <div className="dropdown-select" onClick={handleOpen}>
          {selectedGroup}
        </div>
        {open ? (
          <div className="menu">
            {GROUPS.map((group) => {
              return (
                <div
                  className="menu-item"
                  onClick={() => setSelectedGroup(group.name)}
                >
                  {group.label}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
