export default function Preview({ file, handleRemove }) {
  return (
    <div className="preview-file">
      <img
        src={URL.createObjectURL(file)}
        className="preview-img"
        alt={file.name}
      />
      <div className="file-info">
        <span className="file-name">{file.name}</span>
        <span className="file-size">{(file.size / 1024).toFixed(2)}KB</span>
      </div>
      <button className="preview-btn" onClick={() => handleRemove(file.name)}>
        X
      </button>
    </div>
  );
}
