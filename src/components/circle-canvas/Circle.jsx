export default function Circle({ circle }) {
  return (
    <div
      style={{
        top: `${circle.y}px`,
        left: `${circle.x}px`,
        backgroundColor: circle.bgColor,
      }}
      className="circle"
    ></div>
  );
}
