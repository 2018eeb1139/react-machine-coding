export default function PostImage({ image }) {
  return (
    <img src={image.download_url} alt={image.author} className="post-image" />
  );
}
