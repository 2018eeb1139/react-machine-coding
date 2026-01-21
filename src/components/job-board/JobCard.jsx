import "./jobs.css";

export default function JobCard({ time, title }) {
  const heading = title.split(" ");
  return (
    <div className="card">
      <h4>{heading[0]}</h4>
      <p>{title}</p>
      <p>21/01/2026</p>
    </div>
  );
}
