import "../styles/App.css";
// import Card from "../components/Card";
// import { useEffect, useState } from "react";


// type CardInterface = {
//   title: String, 
//   tags: Array<String>
// }

function App() {
  // let [cards, setCards] = useState<Array<CardInterface>>([]);

  // async function fetchItens() {
  //   let itens = await fetch("http://localhost:3333");

  //   return Promise.all(itens)
  // }

  // useEffect(() => {

  //    fetchItens()
  //   setCards(cards)
  // }, []);

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
