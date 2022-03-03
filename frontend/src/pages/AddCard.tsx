import "../styles/AddCard.css";

export default function AddCard() {
  return (
    <div>
      <header>
        <h2>Criar Insight</h2>
        <a href="/">
          <img alt="Voltar para a página principal" src="" />
        </a>
      </header>
      <form>
        <span>Insight</span>
        <textarea placeholder="Escreva aqui o seu insight..." />
        <span>Categoria</span>
        <input placeholder="Adicione uma categoria (opcional)..." />
      </form>
    </div>
  );
}
