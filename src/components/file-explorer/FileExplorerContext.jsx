import { createContext, useState } from "react";
import data from "../data/FileExplorerData.js";

export const FileExplorerContext = createContext();

export default function FileExplorerContextWrapper({ children }) {
  const [nodes, setNodes] = useState(data);
  const addNode = (parentId, value) => {
    if (!value) return;
    const newId = Date.now();
    const newData = {
      id: newId,
      name: value,
      parentId,
    };
    const isFolder = value.split(".");
    if (isFolder.length > 1) {
      //file
      newData.type = "file";
    } else {
      //folder
      newData.type = "folder";
      newData.children = [];
    }
    const updatedNodes = { ...nodes, [newId]: newData };
    updatedNodes[parentId].children.unshift(newId);
    setNodes(updatedNodes);
  };

  const editNode = (id, value) => {
    // TODO: edit file/folder
    const updatedNodes = { ...nodes };
    updatedNodes[id].name = value;
    setNodes(updatedNodes);
  };

  const deleteNode = (id) => {
    const updatedNodes = { ...nodes };
    const parentId = updatedNodes[id].parentId;
    updatedNodes[parentId].children = updatedNodes[parentId].children.filter(
      (childId) => childId !== id,
    );
    // console.log(updatedNodes);
    const q = [id];
    while (q.length > 0) {
      const curr_node = q.shift();
      if (nodes[curr_node].children) q.push(...nodes[curr_node].children);
      delete updatedNodes[curr_node];
    }
    setNodes(updatedNodes);
  };
  return (
    <FileExplorerContext.Provider
      value={{ nodes, addNode, editNode, deleteNode }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
}
