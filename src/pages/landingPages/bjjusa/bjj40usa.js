import React from 'react';
import './styles.css'; // Import global styles

// Button Component
const Button = ({ text, url, bgColor, color, hoverBgColor, hoverColor, fontSize, fontWeight, width, borderRadius }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="button"
    style={{
      background: bgColor,
      color,
      fontSize: `${fontSize}px`,
      fontWeight,
      width: `${width}px`,
      borderRadius: `${borderRadius.top}px ${borderRadius.right}px ${borderRadius.bottom}px ${borderRadius.left}px`,
    }}
  >
    {text}
  </a>
);

// Heading Component
const Heading = ({ text, color, fontSize, fontWeight, align, lineHeight, textDecoration, width }) => (
  <div
    className="heading"
    style={{
      color,
      fontSize: `${fontSize}px`,
      fontWeight,
      textAlign: align,
      lineHeight: `${lineHeight}px`,
      textDecoration,
      width: width ? `${width}%` : 'auto',
    }}
    dangerouslySetInnerHTML={{ __html: text }}
  />
);

// TextEditor Component
const TextEditor = ({ text, color, fontSize, fontWeight, align, lineHeight }) => (
  <div
    className="text-editor"
    style={{
      color,
      fontSize: `${fontSize}px`,
      fontWeight,
      textAlign: align,
      lineHeight: `${lineHeight}px`,
    }}
    dangerouslySetInnerHTML={{ __html: text }}
  />
);

// Icon Component
const Icon = ({ icon, color, size, align }) => (
  <i
    className={icon}
    style={{
      color,
      fontSize: `${size}px`,
      textAlign: align,
    }}
  />
);

// Container Component
const Container = ({ children, backgroundColor, flexDirection, justifyContent, alignItems, minHeight, width, padding, margin, borderRadius }) => (
  <div
    className="container"
    style={{
      backgroundColor,
      flexDirection,
      justifyContent: justifyContent || 'flex-start',
      alignItems: alignItems || 'stretch',
      minHeight: minHeight ? `${minHeight}px` : 'auto',
      width: width ? `${width}%` : '100%',
      padding: padding ? `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px` : '20px',
      margin: margin ? `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px` : '0',
      borderRadius: borderRadius ? `${borderRadius.top}px ${borderRadius.right}px ${borderRadius.bottom}px ${borderRadius.left}px` : '0',
    }}
  >
    {children}
  </div>
);

function App() {
  return (
    <div className="app">
      {/* Section 1: Header with Video */}
      <Container backgroundColor="#FFA2DC" flexDirection="column" justifyContent="center" alignItems="center">
        <TextEditor text="<h6><b>Dra. Jackie Souto</b></h6>" color="#F07FCD" fontSize={20} fontWeight={400} align="center" />
        <Heading text="<b>CASAIS INTELIGENTES</b><br><b>EMAGRECEM JUNTOS</b>" color="#C81C86" fontSize={41} fontWeight={800} align="center" lineHeight={47} />
        <Heading text="O Segredo para Emagrecer, Reacender a Paixão e Construir um Futuro Saudável a dois" color="#FFFFFF" fontSize={18} fontWeight={600} align="center" lineHeight={26} />
        <Heading text='"Clique no PLAY para iniciar o Video"' color="#991717" fontSize={18} fontWeight={900} align="center" lineHeight={26} />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/c3n98C6bFos" title="Video" frameBorder="0" allowFullScreen />
      </Container>

      {/* Section 2: Free Class Banner */}
      <Container backgroundColor="#FFA2DC" flexDirection="row" justifyContent="center">
        <Heading text="AULA GRATUITA POR TEMPO LIMITADO!" color="#FFFFFF" fontSize={30} fontWeight={800} align="center" lineHeight={47} />
      </Container>

      {/* Section 3: Call to Action Button */}
      <Container backgroundColor="#FFA2DC" flexDirection="row" justifyContent="center">
        <Button
          text="QUERO COMEÇAR AGORA!"
          url="https://pay.hotmart.com/R89413028O?checkoutMode=10"
          bgColor="#00FF3B"
          color="#363889"
          hoverBgColor="#363889"
          hoverColor="#00FF3B"
          fontSize={21}
          fontWeight={800}
          width={413}
          borderRadius={{ top: 25, right: 25, bottom: 25, left: 25 }}
        />
      </Container>

      {/* Section 4: Benefits */}
      <Container backgroundColor="#FFA2DC" flexDirection="row" justifyContent="center">
        <Container flexDirection="row" justifyContent="space-around" width={100}>
          <Container flexDirection="column" width={25} alignItems="center">
            <Icon icon="fas fa-handshake" color="#FFFFFF" size={30} align="center" />
            <TextEditor text="<p><b>7 dias de garantia</b></p><p><b>RISCO ZERO</b></p>" color="#FFFFFF" fontSize={14} fontWeight={400} align="center" lineHeight={11} />
          </Container>
          <Container flexDirection="column" width={25} alignItems="center">
            <Icon icon="fas fa-door-open" color="#FFFFFF" size={30} align="center" />
            <TextEditor text="<p><b>Acesso imediato à área de membros</b></p>" color="#FFFFFF" fontSize={14} fontWeight={400} align="center" />
          </Container>
          <Container flexDirection="column" width={25} alignItems="center">
            <Icon icon="fas fa-shield-alt" color="#FFFFFF" size={30} align="center" />
            <TextEditor text="<p><b>Compra Segura</b></p>" color="#FFFFFF" fontSize={14} fontWeight={400} align="center" />
          </Container>
          <Container flexDirection="column" width={25} alignItems="center">
            <Icon icon="ti-headphone-alt" color="#FFFFFF" size={30} align="center" />
            <TextEditor text="<p><b>Suporte com supervisão do Especialista</b></p>" color="#FFFFFF" fontSize={14} fontWeight={400} align="center" />
          </Container>
        </Container>
      </Container>

      {/* Section 5: Welcome Message */}
      <Container flexDirection="row" justifyContent="center">
        <Container flexDirection="column" width={50}>
          <TextEditor text="<p><b>FINALMENTE</b></p><p><b>A SUA HORA</b></p><p><b>CHEGOU!</b></p>" color="#C81C86" fontSize={50} fontWeight={800} align="left" lineHeight={46} />
          <TextEditor text="<p>Seja bem-vinda e descubra o inovador método que 'Casais Inteligentes Emagrecem Juntos' te entrega e mergulhe em uma jornada de bem-estar ao lado do seu parceiro.</p><p>Supere desafios, abandone hábitos prejudiciais e construa uma vida mais saudável e feliz. Não deixe escapar a chance de transformar seus sonhos em realidade. Seu caminho para uma vida saudável começa aqui!</p>" color="#6E6E6E" fontSize={19} fontWeight={400} align="left" />
        </Container>
        <Container flexDirection="column" width={50}>
          <img src="https://lightblue-ape-619484.hostingersite.com/wp-content/uploads/2023/11/Testemunhos-01.jpg" alt="Testimonial" style={{ height: '550px', width: '100%' }} />
        </Container>
      </Container>

      {/* Section 6: Method Introduction */}
      <Container backgroundColor="#C81C86" flexDirection="column" justifyContent="center" minHeight={373}>
        <Heading text="Essa é a <u>melhor maneira</u> de EMAGRECER o seu corpo<br>enquanto FORTALECE seu Relacionamento" color="#FFFFFF" fontSize={47} fontWeight={800} align="center" lineHeight={47} />
        <Heading text="Em nosso eBook '<u><b>Casais Inteligentes Emagrecem Juntos</b></u>', oferecemos orientação especializada para fortalecer tanto seu corpo quanto seu relacionamento. Descubra segredos para emagrecer em parceria. A hora de transformar sua jornada é agora. Clique no link abaixo para iniciar a mudança que você e seu parceiro merecem. Veja histórias reais de casais que transformaram suas vidas com nosso eBook. Sucesso comprovado! Sua jornada começa hoje. Clique para abraçar a transformação juntos!<br>" color="#FFFFFF" fontSize={18} fontWeight={600} align="center" lineHeight={26} width={56} />
        <Button
          text="QUERO COMEÇAR AGORA!"
          url="https://pay.hotmart.com/R89413028O?checkoutMode=10"
          bgColor="#00FF3B"
          color="#363889"
          hoverBgColor="#363889"
          hoverColor="#00FF3B"
          fontSize={21}
          fontWeight={800}
          width={413}
          borderRadius={{ top: 25, right: 25, bottom: 25, left: 25 }}
        />
      </Container>

      {/* Section 7: About the Guide */}
      <Container flexDirection="row" justifyContent="center">
        <Container flexDirection="column" width={50}>
          <TextEditor text="<p><b>QUEM SERÁ</b></p><p><b>SUA GUIA?</b></p>" color="#000000" fontSize={50} fontWeight={400} align="left" lineHeight={46} />
          <TextEditor text="<p><b>Olá! Eu sou a Jackie Souto</b></p>" color="#C81C86" fontSize={36} fontWeight={400} align="left" lineHeight={46} />
          <TextEditor text="<p>Eu sou farmacêutica e apaixonada defensora da saúde e especialista em emagrecimento, sendo diretamente responsável não apenas pelo emagrecimento mas sobretudo pela ajuda na promoção da saúde de pessoas em mais de 3 continentes.</p><p>Há 13 anos, iniciei minha jornada na Universidade Federal da Bahia, e desde então, tenho dedicado minha vida a ajudar as pessoas a conquistarem o emagrecimento, a saúde e o bem-estar que merecem.</p>" color="#6E6E6E" fontSize={19} fontWeight={400} align="left" />
        </Container>
        <Container flexDirection="column" width={50}>
          <img src="https://lightblue-ape-619484.hostingersite.com/wp-content/uploads/2023/11/jackie_hotmart2.jpg" alt="Jackie Souto" style={{ width: '100%' }} />
        </Container>
      </Container>

      {/* Section 8: Target Audience */}
      <Container backgroundColor="#C81C86" flexDirection="column" justifyContent="center" minHeight={142}>
        <Heading text="PARA QUEM É ESSE MÉTODO?" color="#FFFFFF" fontSize={47} fontWeight={800} align="center" lineHeight={47} />
        <Heading text="Para mulheres que querem se sentir poderosas, desejadas e amadas!" color="#FFFFFF" fontSize={18} fontWeight={600} align="center" lineHeight={26} width={69} />
        <Container flexDirection="row" justifyContent="space-around" width={100}>
          <Container backgroundColor="#1C1C4C" flexDirection="column" width={25} borderRadius={{ top: 25, right: 25, bottom: 25, left: 25 }} padding={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Icon icon="fas fa-weight" color="#FFFFFF" size={112} align="center" />
            <Heading text="PARA MULHERES CANSADAS" color="#FFFFFF" fontSize={18} fontWeight={800} align="center" />
            <TextEditor text="<p>De passar fome, seguindo dietas monótonas e restritivas sem sucesso</p>" color="#FFFFFF" fontSize={14} fontWeight={500} align="center" />
          </Container>
          <Container backgroundColor="#1C1C4C" flexDirection="column" width={25} borderRadius={{ top: 25, right: 25, bottom: 25, left: 25 }} padding={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Icon icon="fas fa-heart-broken" color="#FFFFFF" size={112} align="center" />
            <Heading text="PARA MULHERES FRUSTRADAS" color="#FFFFFF" fontSize={18} fontWeight={800} align="center" />
            <TextEditor text="<p>Com a falta de apoio do parceiro na busca por uma vida saudável</p>" color="#FFFFFF" fontSize={14} fontWeight={500} align="center" />
          </Container>
          <Container backgroundColor="#1C1C4C" flexDirection="column" width={25} borderRadius={{ top: 25, right: 25, bottom: 25, left: 25 }} padding={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Icon icon="fas fa-running" color="#FFFFFF" size={112} align="center" />
            <Heading text="PARA MULHERES PRONTAS" color="#FFFFFF" fontSize={18} fontWeight={800} align="center" />
            <TextEditor text="<p>Para transformar corpo e relacionamento com o apoio do parceiro</p>" color="#FFFFFF" fontSize={14} fontWeight={500} align="center" />
          </Container>
        </Container>
      </Container>

      {/* Section 9: Final CTA */}
      <Container backgroundColor="#FFA2DC" flexDirection="column" justifyContent="center" alignItems="center" minHeight={200}>
        <Heading text="COMECE AGORA MESMO!" color="#C81C86" fontSize={47} fontWeight={800} align="center" lineHeight={47} />
        <Button
          text="QUERO COMEÇAR AGORA!"
          url="https://pay.hotmart.com/R89413028O?checkoutMode=10"
          bgColor="#00FF3B"
          color="#363889"
          hoverBgColor="#363889"
          hoverColor="#00FF3B"
          fontSize={21}
          fontWeight={800}
          width={413}
          borderRadius={{ top: 25, right: 25, bottom: 25, left: 25 }}
        />
      </Container>
    </div>
  );
}

export default App;