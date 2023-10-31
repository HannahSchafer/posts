import { GROUP_BY_OPTS } from "../../constants";
import { useStoreContext } from "../../stores/PostsContext";
import "./Tabs.css";

interface TabsProps {
  selectedGroup: string;
  setSelectedGroup: (group: string) => void;
}

function Tabs() {
  const {
    state: { postsByGroup, selectedGroup },
    actions: { setSelectedGroup },
  } = useStoreContext();
  const handleSelect = (selectedOpt: string) => {
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
