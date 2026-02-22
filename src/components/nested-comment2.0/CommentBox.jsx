import { useState } from "react";
import ReplyComment from "./ReplyComment";

export default function CommentBox({
  comment,
  allComments,
  addReply,
  deleteComment,
}) {
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleClick = () => {
    setShowReplyBox(!showReplyBox);
  };

  return (
    <div className="comment-container">
      <div className="comment-header">
        <p className="comment-value">{comment.value}</p>
        <div className="comment-actions">
          <button className="reply-btn" onClick={handleClick}>
            {showReplyBox ? "Cancel" : "Reply"}
          </button>
          <button
            className="delete-btn"
            onClick={() => deleteComment(comment.id)}
          >
            Delete
          </button>
        </div>
      </div>
      {showReplyBox && (
        <ReplyComment
          id={comment.id}
          setShowReplyBox={setShowReplyBox}
          addReply={addReply}
        />
      )}
      <div className="nested-comments">
        {comment.children.map((childId) => (
          <CommentBox
            key={childId}
            comment={allComments[childId]}
            allComments={allComments}
            addReply={addReply}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </div>
  );
}
