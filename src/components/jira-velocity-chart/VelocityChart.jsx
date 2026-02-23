import { useMemo, useState } from "react";
import Bar from "./Bar";

export default function VelocityChart({ chartData }) {
  const [showChart, setShowChart] = useState(false);
  const maxHeight = useMemo(() => {
    return Math.max(...chartData.map((item) => item.ticketCounter));
  }, [chartData]);

  return (
    <div className="container">
      <button onClick={() => setShowChart(!showChart)}>Toggle Chart</button>
      {showChart && (
        <div className="chart-container">
          <div className="chart">
            {chartData.map((item) => {
              return (
                <Bar
                  key={item.id}
                  {...item}
                  height={(item.ticketCounter / maxHeight) * 100}
                />
              );
            })}
          </div>
          <div className="y-axis-label">No. of tickets</div>
          <div className="x-axis-label">Sprints</div>
        </div>
      )}
    </div>
  );
}
