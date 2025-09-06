import { useState } from "react";

const FileExplorer = ({ folderData }) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div className="file-explorer">
      <h5>
        {folderData.type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
        <span className="name" onClick={() => setShowChildren(!showChildren)}>
          {folderData.name}
        </span>
      </h5>
      {showChildren &&
        folderData?.children?.map((folder, index) => (
          <FileExplorer key={index} folderData={folder} />
        ))}
    </div>
  );
};

export default FileExplorer;
