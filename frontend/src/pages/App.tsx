import "../styles/App.css";
import Card from "../components/Card";

function App() {
  return (
    <div className="App">
      <div id="header-container">
        <img id="branding-logo" alt="branding logo" src="./brand-insights.svg" />
        <section id="profile-contender">
          <img id="profile-photo" alt="profile" src="./eu.jpg"/>
          <h2>Olá, Gabriel!</h2>
          <p>gabriel.camargo@g.globo</p>
          <h3>Feed de Insights</h3>
        </section>
        <a href="/addCard"><img id="plus-logo"alt="add card" src="./plus.svg"/></a>
      </div>
      <Card
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, fugiat enim quia repellat porro placeat, nam amet soluta vero magnam cum quibusdam voluptates voluptate cupiditate accusantium dolore ducimus quam? Ex? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae iure, officia at dolore, recusandae rerum asperiores ab quisquam ut aperiam in inventore quis quas ducimus? Vitae corrupti consectetur modi non! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit impedit, sunt maxime sapiente minus aspernatur eligendi ab nostrum qui amet, quia, obcaecati officia fugit distinctio dignissimos sint nihil eius ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem incidunt eos, consequatur cum non nihil a dolor earum possimus provident pariatur. Animi, harum suscipit? Asperiores nemo distinctio amet suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, tempora animi doloribus velit consequatur unde laboriosam quo vero minus optio. Tempore tempora sapiente, et quae veniam provident autem rerum sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio qui asperiores quo magnam numquam aut animi voluptate esse accusantium aspernatur quasi, reiciendis delectus corporis ut eos assumenda odit dolores nulla!"
        tags={["tag1", "tags2"]}
      />
      <button>Toque para exibir mais insights</button>
      <input placeholder="Pesquise por termos ou categorias..." />
    </div>
  );
}

export default App;
