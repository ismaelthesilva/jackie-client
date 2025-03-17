import React from "react";

const LandingPage = () => {
  return (
    <div className="container mx-auto text-center mt-5 p-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center">
        <img
          src="/bjj40-images/bjjchamp-nz.png"
          alt="Champion"
          className="w-full max-w-md mb-3"
        />
        <h1 className="text-2xl font-bold">
          Aumente sua Força e Energia: O Guia Definitivo para Jiu-Jitsu após os 40!
        </h1>
        <p className="mt-2 text-gray-700">Descubra as estratégias que vão transformar seu desempenho no tatame!</p>
        <h5 className="text-blue-600 font-semibold">Campeão Nacional 2024 - Nova Zelândia</h5>
      </div>

      {/* Video Section */}
      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube Video"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <a href="https://pay.hotmart.com/E97500300E?checkoutMode=10" className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-bold shadow-lg hover:bg-red-700">
          Quero Acessar Este Método Agora!
        </a>
      </div>

      {/* Testimonial Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 text-left">
          <h2 className="text-xl font-bold">Testemunho</h2>
          <p className="mt-2 text-gray-700">
            Vou trazer um pequeno testemunho sobre mim mesmo, para que sirva de incentivo a quem estiver desanimado na questão da saúde. Não desista de você mesmo!
            Eu durante alguns anos, mais especificamente de 2021 até 2024, me sabotei de diversas formas. A pior delas foi acreditar que mergulhar em trabalho sem cuidar de mim era o que me levaria ao sucesso.
            Tentei algumas vezes começar uma vida fitness, mas sempre falhava miseravelmente e em seguida adormecia no meu fracasso.
            Minha esposa, minha maior incentivadora nesse processo de cuidar da saúde, cansou de puxar minha orelha, insistindo no óbvio: eu precisava me cuidar, me alimentar direito e fazer atividade física.
            Enfim, em agosto de 2024 eu acordei, decidi mudar e fazer as coisas de forma diferente. Foi quando eu encontrei o Jiu Jitsu. Iniciei minha atividade física no Jiu Jitsu pesando 96 kg com 110 centímetros de circunferência abdominal, já hipertenso, faltou pouco para um problema grave…
            Hoje eu estou pesando 88kg, estou com 96 centímetros de circunferência abdominal, ainda precisando melhorar e muito, porém, grato a Deus e às pessoas que me ajudaram nesse processo, grato pelas pequenas conquistas.
            Ao lado vou deixar uma montagem comparando meus últimos seis meses…
          </p>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <img src="/bjj40-images/bjjstory-usa.png" alt="Antes e Depois" className="w-full rounded-lg shadow-md" />
        </div>
      </div>

      {/* CTA Button (Repeating) */}
      <div className="mt-6">
        <a href="https://pay.hotmart.com/E97500300E?checkoutMode=10" className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-bold shadow-lg hover:bg-red-700">
          Quero Acessar Este Método Agora!
        </a>
      </div>

      {/* Footer */}
      <footer className="text-center mt-10 p-6 bg-gray-100 rounded-lg">
        <img src="/7dayswarranty" alt="Garantia 7 Dias" className="w-16 mx-auto mb-2" />
        <p className="text-gray-700">Você tem 7 dias de garantia. Se não estiver satisfeito, devolvemos seu dinheiro!</p>
      </footer>
    </div>
  );
};

export default LandingPage;
