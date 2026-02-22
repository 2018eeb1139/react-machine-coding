import { useEffect, useRef, useState } from "react";

export default function ReplyComment({ id, setShowReplyBox, addReply }) {
  const [reply, setReply] = useState("");
  const textareaRef = useRef();
  useEffect(() => {
    textareaRef.current.focus();
  }, []);
  const handlePostReply = () => {
    addReply(reply, id);
    setReply("");
    setShowReplyBox(false);
  };
  return (
    <div className="reply-form">
      <textarea
        className="reply-textarea"
        onChange={(e) => setReply(e.target.value)}
        placeholder="write your reply here..."
        ref={textareaRef}
      ></textarea>
      <button className="post-reply-btn" onClick={handlePostReply}>
        Post Reply
      </button>
    </div>
  );
}
