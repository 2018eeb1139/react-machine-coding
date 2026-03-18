export default function Circle({ top, left, bgColor }) {
  return (
    <div
      className="circle"
      style={{
        backgroundColor: bgColor,
        top,
        left,
      }}
    ></div>
  );
}
