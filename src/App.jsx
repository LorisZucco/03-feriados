import "./App.css";

function App() {
  return (
    <main>
      <header className="header">
        <h1>Próximo Feriado</h1>
        <p>Feriados nacioanis do Brasil</p>
      </header>

      <section className="next-holiday">
        <p>O próximo é</p>
        <h2>Finados</h2>
        <p>segunda-feira, 02/11/2026</p>
        <h2 className="countdown">Faltam 5 d, 2 h, 37 min e 22 s</h2>
      </section>
    </main>
  );
}

export default App;
