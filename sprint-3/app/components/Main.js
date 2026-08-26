export default function Main() {
  return (
    <main className="principal container">
      <div className="badge">
        <span></span> se quiser, um espaço KKKKKKK example
      </div>

      <h1 className="principal-titulo">
       titulo example <br />
        <span className="principal-apoio">apoio titulo example</span>
      </h1>

      <p className="principal-subtexto">
       subtexto example
      </p>

      <div className="principal-botoes">
        <a href="#" className="btn btn-primary btn-large">
         BOTAO 1
        </a>
        <a href="#" className="btn btn-outline btn-large">
          BOTAO 1
        </a>
      </div>

      <div className="image-wrapper">
        <img
          //src={} para depois
          alt="MUDAR QUANDO FOR COLOCAR IMAGEM"
          className="principal-image"
        />
      </div>
    </main>
  );
}