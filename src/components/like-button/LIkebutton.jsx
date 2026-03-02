import "./styles.css";
import { Heart, LoaderCircle } from "lucide-react";
import { useState } from "react";
export default function App() {
  const [like, setLiked] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleLike = () => {
    setError(null);
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } finally {
    }

    setLiked(!like);
  };
  return (
    <>
      <button
        disabled={loading}
        className={`app ${like ? "liked" : ""}`}
        onClick={handleLike}
      >
        {loading ? (
          <LoaderCircle size={18} className="loader icon" />
        ) : (
          <Heart size={18} className="icon" />
        )}
        Like
      </button>
      {error && <p>{error}</p>}
    </>
  );
}
