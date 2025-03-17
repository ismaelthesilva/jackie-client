import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {

  useEffect(() => {
    // Inject the Facebook Pixel script
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '3726830444273032'); 
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Inject the <noscript> image tracking
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `
      <img height="1" width="1" 
      src="https://www.facebook.com/tr?id=217801649056598&ev=PageView&noscript=1" />
    `;
    document.body.appendChild(noscript);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, []);

  return (
    <div className="container text-center mt-5">
      {/* Hero Section */}
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <img
            src="/bjj40-images/bjjchamp-nz.png"
            alt="Champion"
            className="img-fluid mb-3"
          />
          <h1 className="fw-bold">
            Aumente sua Força e Energia: O Guia Definitivo para Jiu-Jitsu após os 40!
          </h1>
          <p className="mt-2 text-muted">
            Descubra as estratégias que vão transformar seu desempenho no tatame!
          </p>
          <h5 className="text-primary fw-semibold">
            Campeão Nacional 2024 - Nova Zelândia
          </h5>
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-5">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://fast.wistia.net/embed/iframe/49kl7n1sal"
            allow="autoplay; fullscreen"
            allowTransparency="true"
            frameBorder="0"
            title="Wistia Video"
            className="w-100"
          ></iframe>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-4">
        <a
          href="https://pay.hotmart.com/E97500300E?checkoutMode=10"
          className="btn btn-danger btn-lg fw-bold shadow-sm"
        >
          Quero Acessar Este Método Agora!
        </a>
      </div>

      {/* Testimonial Section */}
      <div className="mt-5 row align-items-center">
        <div className="col-md-8 text-start">
          <h2 className="fw-bold">Testemunho</h2>
          <p className="mt-3 text-muted">
            Vou trazer um pequeno testemunho sobre mim mesmo, para que sirva de incentivo a quem estiver desanimado na questão da saúde. Não desista de você mesmo!
            Durante anos, acreditei que focar apenas no trabalho me levaria ao sucesso, sem priorizar minha saúde. Em 2024, tudo mudou quando encontrei o Jiu-Jitsu. Iniciei com 96 kg e pressão alta, mas com disciplina, consegui mudar minha vida.
            Hoje, com 88 kg e uma nova mentalidade, sou grato a Deus e às pessoas que me ajudaram nesse processo. Se eu consegui, você também pode!
          </p>
        </div>
        <div className="col-md-4 text-center mt-4 mt-md-0">
          <img
            src="/bjj40-images/bjjstory-usa.png"
            alt="Antes e Depois"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>

      {/* CTA Button (Repeating) */}
      <div className="mt-5">
        <a
          href="https://pay.hotmart.com/E97500300E?checkoutMode=10"
          className="btn btn-danger btn-lg fw-bold shadow-sm"
        >
          Quero Acessar Este Método Agora!
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-white text-center py-4 mt-5 border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex flex-column align-items-center">
              <img src="/bjj40-images/7diasgarantia.png" alt="Garantia 7 Dias" className="img-fluid mb-3" style={{ maxWidth: "120px" }} />
              <p className="text-muted text-center">
                Experimente sem risco! Se não estiver satisfeito em 7 dias, devolvemos seu dinheiro – sem perguntas!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
