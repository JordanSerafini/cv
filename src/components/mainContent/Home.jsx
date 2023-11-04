import expressLogo from "../../assets/expressLogo.png";
import jsLogo from "../../assets/jsLogo.png";
import mongoLogo from "../../assets/mongoLogo-2.png";
import nodeLogo from "../../assets/nodeLogo.png";
import pgLogo from "../../assets/pgLogo.png";
import reactLogo from "../../assets/reactLogo.png";
import reduxLogo from "../../assets/reduxLogo.png";
import tailwindLogo from "../../assets/tailwindLogo-2.png";
import socketLogo from "../../assets/socketLogo.png";
import dockerLogo from "../../assets/dockerLogo.png";
import githubLogo from "../../assets/githubLogo.png";
import LinkdnLogo from "../../assets/linkdnLogo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome, faAddressBook, faDownload  } from '@fortawesome/free-solid-svg-icons';


function Home() {
  return (
    <div className="Home">
      <div className="Home-Left">
        <h2 className="Home-Left-tile">Compétences:</h2>
        <div className="Logo-Container">
          <h4 className="Logo-Title">Front-End:</h4>
          <div className="Logo">
          <img src={jsLogo} alt="JavaScript Logo" />
          </div>
          <div className="Logo">
          <img src={reactLogo} alt="React Logo" />
          </div>
          <div className="Logo">
          <img src={tailwindLogo} alt="Tailwind Logo" />
          </div>
          <div className="Logo">
          <img src={reduxLogo} alt="Redux Logo" />
          </div>
        </div>
        <div className="Logo-Container">
        <h4 className="Logo-Title">Back-End:</h4>
          <div className="Logo">
          <img src={nodeLogo} alt="Node Logo" />
          </div>
          <div className="Logo">
          <img src={expressLogo} alt="Express Logo" />
          </div>
          <div className="Logo">
          <img src={pgLogo} alt="PostgreSQL Logo" />
          </div>
          <div className="Logo">
          <img src={mongoLogo} alt="MongoDB Logo" />
          </div>
          <div className="Logo">
          <img src={jsLogo} alt="JavaScript Logo" />
          </div>
        </div>
        <div className="Logo-Container">
          <h4 className="Logo-Title">Autres:</h4>
          <div className="Logo">
          <img src={socketLogo} alt="Socket.io Logo" />
          </div>
          <div className="Logo">
          <img src={dockerLogo} alt="Docker Logo" />
          </div>
          
          
        </div> 
      
      </div>
      <div className="Home-Right">
        <div className="FirstRight-Container">
            <h3  className="Title-Right">A propos de moi:</h3>
            <p className="Description">Passionné de technologie depuis toujours, j'ai décidé d'embrasser pleinement cet intérêt en me dirigeant vers une carrière dans le domaine informatique. Fort d'une reconversion professionnelle ciblée, j'ai acquis des compétences solides en développement fullstack Javascript grâce à une formation intensive à l'école O'clock, complétée par des cours spécialisés chez Dyma.
              <br></br><br></br>
          Actuellement à la recherche d'une alternance pour un bachelor niveau bac+3, je suis désireux de continuer à me perfectionner et à contribuer au sein d'une entreprise dynamique. Engagé, déterminé et ouvert aux défis, je suis prêt à mettre à profit ma motivation et mon adaptabilité pour exceller dans cette nouvelle étape professionnelle.
          
          </p>
          
        </div>
      
        <div className="SecondRight-Container">
          <h3 className="Title-Right">Détails::</h3>
           <p>Email:<span>Jordanserafini.74@gmail.com</span></p>
           <p>Téléphone:<span>06-27-08-64-75</span></p>  
           <div className="Contact-Logo">
            <p>Github:</p>
          <img src={githubLogo} alt="Github Logo" />
          </div>    
          <div className="Contact-Logo">
            <p>LinkedinLogo:</p>
            <img src={LinkdnLogo} alt="Lkdn Logo" />
          </div>
          
        </div>
      </div>

      
    </div>
  );
}

export default Home;



