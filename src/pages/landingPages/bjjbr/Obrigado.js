import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ThankYouPage = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <img
            src="/bjj40-images/bjjchamp-nz.png"
            alt="Champion"
            className="img-fluid mb-3"
          />
          <h1 className="fw-bold">Obrigado! Entendo que a Mentoria Elite BJJ 40+ não é para você agora, e tudo bem!</h1>
          <p className="mt-2 text-muted">
            Seu acesso foi confirmado ao curso adquirido. Em breve, você receberá todas as informações no seu e-mail.
          </p>
        </div>
      </div>
      <footer className="bg-white text-center py-4 mt-5 border-top">
        <div className="container">
          <p className="text-muted">
            Qualquer dúvida, entre em contato com nosso suporte.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouPage;
