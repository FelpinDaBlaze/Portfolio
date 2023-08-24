import './Main.css';

export default function Main() {
  return (
    <div>
      <main>
        <section id="about">
            <h2>Sobre Mim</h2>
            <p>Uma breve descrição sobre você e suas habilidades como desenvolvedor.</p>
        </section>

        <section id="projects">
            <h2>Projetos</h2>
            <div className="project">
                <h3>Projeto 1</h3>
                <p>Descrição do projeto 1.</p>
            </div>
            <div className="project">
                <h3>Projeto 2</h3>
                <p>Descrição do projeto 2.</p>
            </div>
        </section>

        <section id="contact">
            <h2>Contato</h2>
            <p>Você pode me contatar em: seuemail@example.com</p>
        </section>
    </main>
    </div>
  );
}
