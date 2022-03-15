import "../styles/AddCard.css";

export default function AddCard() {
  return (
    <div id="addCards-container">
      <header id="header-container">
        <h2>Criar Insight</h2>
        <a href="/">
          <img id="rollback-img" alt="Voltar para a página principal" src="./leftArrow.svg" />
        </a>
      </header>
      <form>
        <span id="form-name">Insight</span>
        <textarea placeholder="Escreva aqui o seu insight..." />
        <span>Categoria</span>
        <input placeholder="Adicione uma categoria (opcional)..." />
      </form>
    </div>
  );
}
