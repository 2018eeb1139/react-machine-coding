export default function DayTimeSlots() {
  const slots = Array.from({ length: 24 }, (_, idx) => idx);
  //   console.log(slots);
  return (
    <>
      {slots.map((slot) => (
        <div className="slot" key={slot}>
          {slot}:00
        </div>
      ))}
    </>
  );
}
