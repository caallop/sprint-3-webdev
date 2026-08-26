'use client';
import React, { useEffect } from 'react';

export default function Main() {

  useEffect(() => {
    const infoBotao = document.querySelector('.info_botao');
    const info = document.querySelector('.info');
    const flash = document.querySelector('.flash');
    const flashImg = document.querySelector('.flash img');
    const timer = document.querySelector('.timer');
    const foto = document.querySelector('.foto');

    if (info) info.style.display = 'none';

    const tirarFoto = () => {
      alert('Foto tirada!');
      criarNotificacao('Foto salva na galeria');
    };

    const handleInfoClick = () => {
      if (info) {
        info.style.display = info.style.display === 'none' ? 'flex' : 'none';
      }
    };
    if (infoBotao) infoBotao.addEventListener('click', handleInfoClick);

    const handleFlashClick = () => {
      document.body.classList.toggle('flashAtivo');
      if (document.body.classList.contains('flashAtivo')) {
        if (flashImg) flashImg.src = "/img_sp2/flash.png";
        alert('Flash ativado!');
      } else {
        if (flashImg) flashImg.src = "/img_sp2/sem_flash.png";
        alert('Flash desativado!');
      }
    };
    if (flash) flash.addEventListener('click', handleFlashClick);

    const handleTimerClick = () => {
      alert('Foto será tirada em 3 segundos!');
      setTimeout(() => {
        tirarFoto();
      }, 3000);
    };
    if (timer) timer.addEventListener('click', handleTimerClick);

    const handleFotoClick = () => {
      tirarFoto();
    };
    if (foto) foto.addEventListener('click', handleFotoClick);

    function criarNotificacao(texto) {
      const notificacao = document.createElement('div');
      notificacao.classList.add('notificacao');
      notificacao.innerText = texto;
      document.body.appendChild(notificacao);
      setTimeout(() => {
        notificacao.remove();
      }, 3000);
    }

    return () => {
      if (infoBotao) infoBotao.removeEventListener('click', handleInfoClick);
      if (flash) flash.removeEventListener('click', handleFlashClick);
      if (timer) timer.removeEventListener('click', handleTimerClick);
      if (foto) foto.removeEventListener('click', handleFotoClick);
    };
  }, []);

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
          BOTAO 2
        </a>
      </div>

      <div className="image-wrapper">
        <div className="moldura-celular-codigo">
          
          <div className="pagina-antiga">
            
            {/* */}
            <header className="header-antigo">
              <div className="opcoes">
                <button className="flash" aria-label="ativar o flash">
                  <img src="/img_sp2/flash.png" alt="flash" />
                </button>
                <button className="timer" aria-label="ativar o timer">
                  <img src="/img_sp2/relogio.png" alt="relogio" />
                </button>
                <button className="info_botao" aria-label="informações">
                  <img src="/img_sp2/info.png" alt="info" />
                </button>
              </div>
            </header>

            <div className="info" style={{ background: '#fff', padding: '10px', margin: '10px', borderRadius: '8px' }}>
              <p>Painel de descoberta / Sprint 2 integrada!</p>
            </div>

              <footer className="footer-antigo">
                <div className="botoes-inferiores">
                  <button className="botao-baixo" aria-label="acessibilidade">
                    <img src="/img_sp2/acessibilidade.png" alt="acessibilidade" />
                  </button>
                  
                  <button className="foto botao-baixo" aria-label="tirar foto">
                    <img src="/img_sp2/botao_foto.png" alt="tirar foto" />
                  </button>
                  
                  <button className="botao-baixo" aria-label="galeria">
                    <img src="/img_sp2/galeria.png" alt="galeria" />
                  </button>
                </div>
              </footer>

          </div>

        </div>
      </div>
    </main>
  );
}