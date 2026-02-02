import { useEffect, useRef, useState } from "react";
const STORY_LIFETIME = 30000;

export default function InstaStory() {
  const [openStory, setOpenStory] = useState(null);
  const [stories, setStories] = useState([]);
  const timerRef = useRef();
  const timerIdRef = useRef();
  // console.log(stories);
  const handleStoryClick = (url) => {
    setOpenStory(url);
    timerIdRef.current = setTimeout(() => {
      setOpenStory(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerIdRef.current);
      clearTimeout(timerRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    const id = crypto.randomUUID();
    const storyObj = {
      id,
      imageUrl: URL.createObjectURL(file),
    };
    timerRef.current = setTimeout(() => {
      setStories((prev) => {
        return prev.filter((story) => {
          if (story.id !== id) {
            return true;
          } else {
            URL.revokeObjectURL(story.imageUrl);
          }
        });
      });
    }, STORY_LIFETIME);
    setStories((prev) => {
      return [storyObj, ...prev];
    });
  };

  return (
    <>
      {openStory ? (
        <Modal imgSrc={openStory} />
      ) : (
        <div className="story-row">
          <label htmlFor="addStory" className="add-story">
            <span>+</span>
            <input type="file" hidden id="addStory" onChange={handleChange} />
          </label>
          {stories.map(({ id, imageUrl }) => (
            <div
              key={id}
              className="story-previewer"
              onClick={() => handleStoryClick(imageUrl)}
            >
              <img src={imageUrl} alt="story-preview" />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

const Modal = ({ imgSrc }) => {
  return (
    <div className="open-story">
      <img src={imgSrc} alt="open-story" />
    </div>
  );
};
