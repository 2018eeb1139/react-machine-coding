import React, { useState } from "react";
import "./style.css";
import data from "./data/data.json";
import Comment from "./components/Comment.jsx";

export default function ListComments() {
  // console.log(data);
  const [comments, setComments] = useState(data);

  // console.log('comments', comments);

  const addReply = (id, newComment) => {
    // to add reply
    console.log("here ", id, newComment);
    const addingReply = (nodes = []) =>
      nodes?.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            children: [...(node.children || []), newComment],
          };
        }
        return {
          ...node,
          children: addingReply(node.children || []),
        };
      });

    setComments((prevComments) => addingReply(prevComments));
  };

  return (
    <div>
      {comments?.map((comment, idx) => (
        <Comment
          key={comment.id}
          comment={comment}
          addReply={addReply}
          isRoot={true}
        />
      ))}
    </div>
  );
}
