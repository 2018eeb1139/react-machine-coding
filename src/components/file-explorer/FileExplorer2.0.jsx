import { useContext, useState } from "react";
import { FileExplorerContext } from "../context/FileExplorerContext";
import Input from "./Input";

export default function FileExplorer({ id = 1 }) {
  const [showChildren, setShowChildren] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showEditInput, setShowEditInput] = useState(false);
  const { nodes, addNode, editNode, deleteNode } =
    useContext(FileExplorerContext);
  const handleShowChildren = () => {
    setShowChildren(!showChildren);
  };
  console.log(nodes);
  return (
    <div className="container">
      <h5>
        {nodes[id].type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
        {showEditInput ? (
          <Input
            defaultValue={nodes[id].name}
            id={id}
            submit={editNode}
            cancel={() => setShowEditInput(false)}
          />
        ) : (
          <>
            <span className="label" onClick={handleShowChildren}>
              {nodes[id].name}
            </span>

            {nodes[id].type === "folder" && (
              <span
                className="label"
                onClick={() => {
                  setShowInput(true);
                }}
              >
                +
              </span>
            )}
            <span className="label" onClick={() => setShowEditInput(true)}>
              🖊️
            </span>
            <span className="label" onClick={() => deleteNode(id)}>
              🗑️
            </span>
          </>
        )}
      </h5>
      <>
        {showInput && (
          <Input
            id={id}
            submit={addNode}
            cancel={() => setShowInput(false)}
            setShowChildren={setShowChildren}
          />
        )}
      </>
      {showChildren &&
        nodes[id]?.children?.map((childId, idx) => (
          <FileExplorer key={idx} id={childId} />
        ))}
    </div>
  );
}
