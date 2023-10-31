import React, { useState } from "react";
import { FiEdit3, FiSave } from "react-icons/fi";

import "./EditableText.css";

interface EditableTextProps {
  text: string;
}

const EditableText = ({ text }: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [displayedText, setText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setText(editedText);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div className="text-wrapper">
          <input type="text" value={editedText} onChange={handleInputChange} />
          <FiSave className="text-icon" onClick={handleSaveClick}>
            Save
          </FiSave>
        </div>
      ) : (
        <div className="text-wrapper">
          <div className="text">{displayedText}</div>
          <FiEdit3 className="text-icon" onClick={handleEditClick}>
            Edit
          </FiEdit3>
        </div>
      )}
    </div>
  );
};

export default EditableText;
