export default function Bar({ name, ticketCounter, color, height }) {
  return (
    <div
      className="bar"
      style={{
        height: `${height}%`,
        backgroundColor: color,
      }}
    >
      <div className="tooltip">
        {name}-{ticketCounter}
      </div>
    </div>
  );
}
