import React from "react";

interface ErrorProps {
  type: string;
}

const EditableText = ({ type }: ErrorProps) => {
  return (
    <div>
      {`We are unable to show ${type} at this time. Please try again later.`}
    </div>
  );
};

export default EditableText;
