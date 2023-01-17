function App() {
  return (
    <div className="App">
      <header>
        <h1>Indovina il numero!</h1>
        <p className="between">(Tra 1 e 20)</p>
        <button className="btn again">Gioca ancora!</button>
        <div className="number">?</div>
      </header>

      <main>
        <section className="left">
          <input type="number" className="guess" />
          <button className="btn check">Controlla!</button>
        </section>

        <section className="right">
          <p className="message">Inizia ad indovinare...</p>
          <p className="label-score">
            Punteggio: <span className="score">20</span>
          </p>
          <p className="label-highscore">
            Punteggio più alto: <span className="highscore">0</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
