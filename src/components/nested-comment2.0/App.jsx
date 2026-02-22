import CommentBox from "./components/CommentBox";
import "./styles.css";
import data from "./commentsData.json";
import { useState } from "react";

export default function App() {
  const [comments, setComments] = useState(data.comments);
  console.log(comments);
  const addReply = (value, parentId) => {
    const newId = Date.now();
    const newComment = {
      id: newId,
      parentId,
      value,
      children: [],
    };
    // console.log(newComment);
    setComments((prevComments) => {
      const updatedComments = { ...prevComments, [newId]: newComment };
      updatedComments[parentId].children.unshift(newId);
      return updatedComments;
    });
  };

  const deleteComment = (id) => {
    const parentId = comments[id].parentId;
    setComments((prevComments) => {
      const updatedComments = { ...prevComments };
      if (
        updatedComments[parentId]?.children &&
        updatedComments[parentId].children.length > 0
      ) {
        updatedComments[parentId].children = updatedComments[
          parentId
        ].children.filter((childId) => childId !== id);
      }
      const q = [id];
      while (q.length > 0) {
        const curr = q.shift();
        q.push(...updatedComments[curr].children);

        delete updatedComments[curr];
      }
      return updatedComments;
    });
  };

  return (
    <CommentBox
      comment={comments[1]}
      allComments={comments}
      addReply={addReply}
      deleteComment={deleteComment}
    />
  );
}
