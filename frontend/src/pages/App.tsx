import apollo from "@apollo/client"
import Card from "../components/Card"

import "../styles/App.css";

function App() {

  return (
    <div className="App">
      <div id="header-container">
        <img
          id="branding-logo"
          alt="branding logo"
          src="./brand-insights.svg"
        />
        <section id="profile-contender">
          <img id="profile-photo" alt="profile" src="./eu.jpg" />
          <h2>Olá, Gabriel!</h2>
          <p>gabriel.camargo@g.globo</p>
          <h3>Feed de Insights</h3>
        </section>
        <a href="/addCard">
          <img id="plus-logo" alt="add card" src="./plus.svg" />
        </a>
      </div>
      {/* {cards.forEach(card => {
          return <Card text={card.text} tags={card.tags}/>
      })} */}
      <button>Toque para exibir mais insights</button>
      <input placeholder="Pesquise por termos ou categorias..." />
    </div>
  );
}

export default App;
