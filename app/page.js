import ContactButton from "../components/ContactButton";

export default function HomePage() {
  return (
<div className="wrap">
    <header>
      <a className="brand" href="#inicio" aria-label="Feitosatech, início"><span className="mark" aria-hidden="true">/›</span><span>feitosa<span style={{"color":"var(--lime)"}}>tech</span></span></a>
      <nav aria-label="Navegação principal"><a href="#servicos">Soluções</a><a href="#sobre">Como trabalhamos</a><a className="nav-contact" href="#contato">Vamos conversar <span className="arrow">↗</span></a></nav>
    </header>
    <main>
      <section id="inicio" className="hero">
        <div>
          <div className="eyebrow"><span className="dot"></span> Ideias conectadas. Negócios em movimento.</div>
          <h1>Tecnologia que<br />faz seu negócio<br /><span>ir além.</span></h1>
          <p className="intro">Menos tarefas repetitivas. Mais possibilidades.<br />Transforme processos e ideias em soluções digitais que fazem sentido para o seu negócio.</p>
          <div className="actions"><a className="button" href="#contato">Vamos tirar sua ideia do papel <span className="arrow">↗</span></a><a className="text-link" href="#servicos">Explore as soluções</a></div>
          <div className="hero-note"><svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="1.5"/></svg> Tecnologia com propósito. Do problema à solução.</div>
        </div>
        <div className="visual" role="img" aria-label="Ilustração de sistemas conectados por uma solução digital">
          <div className="orbit"></div><div className="spark" aria-hidden="true">✳</div>
          <div className="console"><div className="console-top"><div className="lights"><i></i><i></i><i></i></div><span>feitosatech / soluções</span><span>↗</span></div><div className="console-body"><div className="console-label">DA COMPLEXIDADE À CONEXÃO</div><h3>Seu próximo passo, conectado.</h3><div className="flow"><div className="flow-box">&lt;/&gt;</div><span className="connector">···</span><div className="flow-box main">ft.</div><span className="connector">···</span><div className="flow-box">↗</div></div><div className="code"><span style={{"color":"#6d8066"}}>// ideias que viram soluções</span><br /><em>conectar</em>(pessoas, processos);<br /><em>simplificar</em>(rotina);<br /><em>construir</em>(próximo_passo);</div><div className="console-footer"><span className="status"><span className="dot"></span> Pronto para transformar</span><span>01 — ∞</span></div></div></div>
          <div className="float-tag"><b>↗</b><div>Seu negócio.<br /><strong>Novas possibilidades.</strong></div></div><span className="visual-caption">CONCEITO VISUAL • FEITOSATECH</span>
        </div>
      </section>
      <div className="strip"><span><b>↗</b> Desenvolvimento</span><span><b>⌘</b> Integrações</span><span><b>ϟ</b> Automação</span><span><b>✳</b> Estratégia digital</span></div>
      <section className="section" id="servicos">
        <div className="section-heading"><div><div className="eyebrow">01 / Soluções</div><h2>O próximo passo do seu negócio<br />começa com a solução certa.</h2></div><p>Da presença digital aos processos internos, a tecnologia pode deixar tudo mais simples.</p></div>
        <div className="services">
          <article className="service"><span className="service-number">01 / CONSTRUIR</span><div className="service-icon" aria-hidden="true">&lt;/&gt;</div><h3>Sites & soluções digitais</h3><p>Uma presença digital clara e experiências pensadas para aproximar sua empresa de quem precisa dela.</p><div className="service-tags"><span>Sites</span><span>Landing pages</span><span>Sistemas</span></div></article>
          <article className="service"><span className="service-number">02 / CONECTAR</span><div className="service-icon" aria-hidden="true">⌘</div><h3>Integrações & automação</h3><p>Conecte ferramentas e simplifique tarefas do dia a dia. Menos trabalho manual, mais espaço para o que importa.</p><div className="service-tags"><span>APIs</span><span>Fluxos de trabalho</span><span>Processos</span></div></article>
          <article className="service"><span className="service-number">03 / EVOLUIR</span><div className="service-icon" aria-hidden="true">↗</div><h3>Consultoria em tecnologia</h3><p>Entenda o desafio, organize as prioridades e encontre um caminho viável para dar o próximo passo.</p><div className="service-tags"><span>Diagnóstico</span><span>Planejamento</span><span>Evolução digital</span></div></article>
        </div>
      </section>
      <section className="section about" id="sobre"><div><div className="eyebrow">02 / Nossa abordagem</div><h2>Primeiro, entendemos.<br />Depois, construímos.<br /><span style={{"color":"var(--lime)"}}>Juntos.</span></h2></div><div><p className="about-text">Cada negócio tem seu ritmo, seus desafios e suas ambições. A proposta da Feitosatech é aproximar a tecnologia da sua realidade, com clareza em cada etapa.</p><div className="steps"><div className="step"><span>01</span><div><h3>Uma conversa para começar</h3><p>Entender sua ideia, o contexto e o que precisa melhorar.</p></div></div><div className="step"><span>02</span><div><h3>Um caminho bem definido</h3><p>Alinhar a solução, o escopo e as próximas etapas.</p></div></div><div className="step"><span>03</span><div><h3>Da ideia para a prática</h3><p>Construir, validar e preparar a solução para o dia a dia.</p></div></div></div></div></section>
      <section className="contact" id="contato"><div><div className="eyebrow">03 / Vamos conversar</div><h2>Sua próxima ideia<br />merece sair do papel.</h2><p>Tem um projeto em mente ou um processo para melhorar?<br />Vamos encontrar o próximo passo para o seu negócio.</p></div><ContactButton contactUrl={process.env.NEXT_PUBLIC_CONTACT_URL || ""} /></section>
    </main>
    <footer><a className="brand" href="#inicio"><span className="mark" aria-hidden="true">/›</span><span>feitosa<span style={{"color":"var(--lime)"}}>tech</span></span></a><p>© <span>{new Date().getFullYear()}</span> Feitosatech. Todos os direitos reservados.</p><div className="footer-links"><a href="#servicos">Soluções</a><a href="#contato">Contato ↗</a></div></footer>
  </div>
  );
}
