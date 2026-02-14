import { useState } from "react";

export default function ContributionCalendar() {
  const [dates, setDates] = useState(Array.from({ length: 31 }).fill(""));
  const [months, setMonths] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);
  //   console.log(dates);
  const [days, setDays] = useState(["Mon", "Wed", "Fri"]);
  return (
    <div className="container">
      <h5>240 contributions in the last year</h5>
      <div className="calendar__container">
        <div className="days">
          {days.map((day, indx) => (
            <span className="day__name" key={indx}>
              {day}
            </span>
          ))}
        </div>
        {months.map((month, index) => (
          <div className="month" key={index}>
            <span className="month__name">{month}</span>
            {dates.map((date, idx) => (
              <div
                className={`date ${
                  idx % 2 === 0 || idx % 3 === 0 ? "less-active" : ""
                } ${idx % 4 === 0 || idx % 6 === 0 ? "active" : ""} ${
                  idx % 7 === 0 ? "more-active" : ""
                }
            `}
                key={`${idx} - ${index}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
