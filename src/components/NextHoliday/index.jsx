import { useState, useEffect, useRef } from "react";

import "./next-holiday.css";

export default function NextHoliday({ holiday }) {
  const [now, setNow] = useState(() => new Date());
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(intervalRef.current);
  });

  const holidaydate = new Date(`${holiday.date}T00:00:00`).toLocaleDateString(
    "pt-BR",
  );

  const start = new Date(`${holiday.date}T00:00:00`);
  const totalSeconds = Math.floor((start - now) / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <section className="next-holiday">
      <p>O próximo é</p>
      <h2>{holiday.name}</h2>
      <p>
        {holiday.weekday}, {holidaydate}
      </p>
      {totalSeconds > 0 ? (
        <h2 className="countdown">
          Faltam {days} d, {hours} h, {minutes} min e {seconds} s
        </h2>
      ) : (
        <h2 className="countdown">É hoje!</h2>
      )}
    </section>
  );
}
