import { useState } from "react";
import Preview from "./Preview";

export default function FileUploader() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  //   console.log(files);
  const handleChange = (e) => {
    const f = e.target.files;
    setFiles([...files, ...f]);
  };
  const handleRemove = (fileName) => {
    setFiles((prevFiles) => {
      return prevFiles.filter((file) => file.name !== fileName);
    });
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files;
    setFiles([...files, ...f]);
  };

  return (
    <div className="container">
      <h3>React File Upload</h3>
      <div
        className={`dropzone ${isDragging ? "dragging" : ""}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Drag and Drop files here</p>
        <span className="or">OR</span>

        <input
          type="file"
          multiple
          className="hidden"
          id="file-input"
          onChange={handleChange}
        />
        <label htmlFor="file-input" className="browse-btn">
          Browse File
        </label>
      </div>
      <div className="preview">
        {files.map((file, idx) => (
          <Preview key={idx} file={file} handleRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}
