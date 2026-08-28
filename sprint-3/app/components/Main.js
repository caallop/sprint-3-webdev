"use client";
import React, { useEffect, useState } from "react";

export default function Main() {
  const [usuarioLogado, setUsuarioLogado] = useState("");

  useEffect(() => {
    const carregarDadosDoNavegador = () => {
      const emailSalvo = localStorage.getItem("raluguva_email");
      if (emailSalvo) {
        const nomeCurto = emailSalvo.split("@")[0];
        setUsuarioLogado(nomeCurto);
      }
    };
    carregarDadosDoNavegador();
  }, []);

  useEffect(() => {
    const containerCelular = document.querySelector(".tela-celular");
    const infoBotao = document.querySelector(".info_botao");
    const info = document.querySelector(".painel-informacoes");
    const acessibilidade = document.querySelector("button[aria-label='acessibilidade']");
    const flash = document.querySelector(".flash");
    const flashImg = document.querySelector(".flash img");
    const timer = document.querySelector(".timer");
    const foto = document.querySelector(".foto");

    if (info) info.style.display = "none";

    const handleInfoClick = () => {
      if (info) {
        info.style.display = info.style.display === "none" ? "flex" : "none";
      }
    };
    if (infoBotao) infoBotao.addEventListener("click", handleInfoClick);

    
    const handleAcessibilidadeClick = () => {
      let imgAcessibilidade = containerCelular.querySelector(".elemento-acessibilidade");
      if (!imgAcessibilidade) {
        imgAcessibilidade = document.createElement("img");
        imgAcessibilidade.src = "/img_sp2/roda_acessibilidade.png";
        imgAcessibilidade.alt = "Acessibilidade Som";
        imgAcessibilidade.classList.add("elemento-acessibilidade");
        containerCelular.appendChild(imgAcessibilidade);
        criarNotificacao("Modo acessibilidade ativado");
      } else {
        imgAcessibilidade.remove();
        criarNotificacao("Modo acessibilidade desativado");
      }
    };
    if (acessibilidade) acessibilidade.addEventListener("click", handleAcessibilidadeClick);

    const handleFlashClick = () => {
      if (containerCelular) {
        containerCelular.classList.toggle("flashAtivo");
        if (containerCelular.classList.contains("flashAtivo")) {
          if (flashImg) flashImg.src = "/img_sp2/flash.png";
        } else {
          if (flashImg) flashImg.src = "/img_sp2/sem_flash.png";
        }
      }
    };
    if (flash) flash.addEventListener("click", handleFlashClick);

   
    const handleTimerClick = () => {
      criarNotificacao("Foto será tirada em 3 segundos!");
      setTimeout(() => {
        tirarFoto();
      }, 3000);
    };
    if (timer) timer.addEventListener("click", handleTimerClick);

    const handleFotoClick = () => {
      tirarFoto();
    };
    if (foto) foto.addEventListener("click", handleFotoClick);

    function tirarFoto() {
      criarNotificacao("Foto salva na galeria");
    }

    function criarNotificacao(texto) {
      const notificacao = document.createElement("div");
      notificacao.classList.add("notificacao");
      notificacao.innerText = texto;
      if (containerCelular) {
        containerCelular.appendChild(notificacao);
      }
      setTimeout(() => {
        notificacao.remove();
      }, 3000);
    }

    return () => {
      if (infoBotao) infoBotao.removeEventListener("click", handleInfoClick);
      if (acessibilidade) acessibilidade.removeEventListener("click", handleAcessibilidadeClick);
      if (flash) flash.removeEventListener("click", handleFlashClick);
      if (timer) timer.removeEventListener("click", handleTimerClick);
      if (foto) foto.removeEventListener("click", handleFotoClick);
    };
  }, []);

  return (
    <main className="principal container">
      <div className="badge">
        {usuarioLogado
          ? `Olá! Bem-vindo(a), ${usuarioLogado}`
          : "Conheça a nossa solução"}
      </div>

      <h1 className="principal-titulo">
        titulo example <br />
        <span className="principal-apoio">apoio titulo example</span>
      </h1>

      <p className="principal-subtexto">subtexto example</p>

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
          <div className="tela-celular">
            <header className="topo-celular">
              <div className="opcoes-celular">
                <button className="flash" aria-label="ativar o flash">
                  <img src="/img_sp2/sem_flash.png" alt="flash" />
                </button>
                <button className="timer" aria-label="ativar o timer">
                  <img src="/img_sp2/relogio.png" alt="relogio" />
                </button>
                <button className="info_botao" aria-label="informações">
                  <img src="/img_sp2/info.png" alt="info" />
                </button>
              </div>
            </header>

            <div className="painel-informacoes">
              <div>
                <img src="/img_sp2/flash.png" alt="flash" width="20" />
                <p>Ativa a função de flash da câmera.</p>
              </div>
              <div>
                <img src="/img_sp2/relogio_3.png" alt="timer" width="20" />
                <p>Ativa um timer de até três segundos.</p>
              </div>
              <div>
                <img src="/img_sp2/acessibilidade.png" alt="olho" width="20" />
                <p>Ativa a função de acessibilidade para ver sons.</p>
              </div>
              <div>
                <img src="/img_sp2/galeria.png" alt="galeria" width="20" />
                <p>Vê a galeria.</p>
              </div>
            </div>

            <footer className="rodape-celular">
              <div className="botoes-inferiores-celular">
                <button className="botao-acao-baixo" aria-label="acessibilidade">
                  <img src="/img_sp2/acessibilidade.png" alt="acessibilidade" />
                </button>

                <button className="foto botao-acao-baixo" aria-label="tirar foto">
                  <img src="/img_sp2/botao_foto.png" alt="tirar foto" />
                </button>

                <button className="botao-acao-baixo" aria-label="galeria">
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