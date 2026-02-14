import React, { useState } from "react";

// Implement FileExplorer component
export const FileExplorer = ({ data }) => {
  // TODO: Complete your code here
  const [showChildren, setShowChildren] = useState(false);

  const handleShowChildren = (isFolder) => {
    if (isFolder) {
      setShowChildren(!showChildren);
    }
  };

  console.log(data);
  return (
    <div className="">
      {data.map((item, idx) => (
        <div key={idx}>
          <h5 onClick={() => handleShowChildren(item.type === "folder")}>
            {item.name}
          </h5>
          {item?.type === "folder" && showChildren && item?.children && (
            <FileExplorer data={item.children} />
          )}
        </div>
      ))}
    </div>
  );
};
