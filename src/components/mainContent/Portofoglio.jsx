import backgroundVideo from '../../assets/background-Anim.mp4';

function Portofoglio() {
  return (
    <div className="Portofoglio">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">

      <h2>
      Bienvenue dans mon univers de développement
      </h2>    
      <h4>
        Projet Principal: <span>Immo-Pros</span>
      </h4>
      <p>
        Plongez au cœur de mon projet majeur, une application dédiée au monde de l'immobilier qui illustre mon habileté à conjuguer des solutions back-end robustes avec une expérience utilisateur fluide et intuitive sur le front-end. Technologies utilisées : Node.js, React, PostgreSQL, etc.
      </p>
      <a href="https://immopros-app.com/login"> Lien vers le site </a>
      <h4>
        Expérimentations et Contributions Open Source
      </h4>
      <p>
        Mes contributions sur GitHub témoignent de mon engagement dans la communauté du code open source. Chaque repository est une opportunité d'apprendre, de partager et de collaborer.
      </p>
      <a href="https://github.com/JordanSerafini"> Lien vers mon Github</a>
      <h4>
        Compétences Techniques
      </h4>
      <p>
        Ma palette de compétences s'étend sur les technologies les plus récentes et les plus demandées du développement web. Je maîtrise JavaScript et son écosystème, et j'ai une expérience pratique avec des bases de données comme PostgreSQL, des frameworks tels que React, ainsi que des outils de développement moderne comme Docker et Socket.IO.
      </p>
      </div>
    </div>
  );
}

export default Portofoglio;
