import React, { useState } from "react";

export default function Comment({ comment, addReply, isRoot }) {
  // console.log(comment);
  const [showComment, setShowComment] = useState(false);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [showChildren, setShowChildren] = useState(true);

  const handleReply = () => {
    if (!replyText) return;

    const newComment = {
      id: new Date().getTime(),
      comment: replyText,
      children: [],
    };

    console.log(newComment);
    addReply(comment.id, newComment);

    setReplyText("");
    setShowReplyBox(false);
  };
  return (
    <div
      className="comment-container"
      style={{
        marginLeft: isRoot ? "0px" : "20px",
        borderLeft: "1px solid black",
      }}
    >
      <p>{comment.comment}</p>
      <button onClick={() => setShowReplyBox(!showReplyBox)}>Reply</button>
      {comment.children && comment.children.length > 0 && (
        <button onClick={() => setShowChildren(!showChildren)}>
          {showChildren ? "Hide" : "Show"} Replies
        </button>
      )}

      {showReplyBox && (
        <div>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          ></textarea>
          <button onClick={handleReply}>Add Reply</button>
        </div>
      )}

      {showChildren &&
        comment?.children?.map((child, idx) => {
          return (
            <Comment
              key={child.id}
              comment={child}
              addReply={addReply}
              isRoot={false}
            />
          );
        })}
    </div>
  );
}
