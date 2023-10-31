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
    // You can perform some action with the edited text here, e.g., update it in your state or send it to an API.
    console.log("Saved:", editedText);
    setText(editedText);
  };

  const handleInputChange = (e: any) => {
    setEditedText(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div className="text-container">
          <input type="text" value={editedText} onChange={handleInputChange} />
          <FiSave className="editable-text-icon" onClick={handleSaveClick}>
            Save
          </FiSave>
        </div>
      ) : (
        <div className="text-container">
          <div className="text">{displayedText}</div>
          <FiEdit3 className="editable-text-icon" onClick={handleEditClick}>
            Edit
          </FiEdit3>
        </div>
      )}
    </div>
  );
};

export default EditableText;
