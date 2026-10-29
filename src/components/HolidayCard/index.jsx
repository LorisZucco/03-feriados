import "./holiday-card.css";

export default function HolidayCard({ date, name, weekday, type }) {
  const day = new Date(`${date}T00:00:00`);
  const formattedDate = day.toLocaleDateString("pt-BR");
  const isLongWeekend = weekday == "segunda-feira" || weekday == "sexta-feira";
  const isWeekend = weekday == "sábado" || weekday == "domingo";
  const isBrdige = weekday == "terça-feira" || weekday == "quinta-feira";
  // console.log(isLongWeekend);
  return (
    <article className="holiday-card">
      <p className="holiday-date">{formattedDate}</p>

      <div className="holiday-info">
        <h2> {name}</h2>
        <p>{weekday}</p>
      </div>

      {isLongWeekend && <span className="tag long-weekend">feriadão</span>}
      {isWeekend && <span className="tag weekend">fim de semana</span>}
      {isBrdige && <span className="tag bridge">emenda</span>}
    </article>
  );
}
