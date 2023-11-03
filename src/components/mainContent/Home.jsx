import expressLogo from "../../assets/expressLogo.png";
import jsLogo from "../../assets/jsLogo.png";
import mongoLogo from "../../assets/mongoLogo.jpg";
import nodeLogo from "../../assets/nodeLogo.png";
import pgLogo from "../../assets/pgLogo.png";
import reactLogo from "../../assets/reactLogo.png";
import reduxLogo from "../../assets/reduxLogo.png";
import tailwindLogo from "../../assets/tailwindLogo.jpg";
import socketLogo from "../../assets/socketLogo.png";
import dockerLogo from "../../assets/dockerLogo.png";
import githubLogo from "../../assets/githubLogo.png";


function Home() {
  return (
    <div className="Home">
      <div className="Home-Left">
      <div className="Home-Left-First">
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
          <div className="Logo">
          <img src={githubLogo} alt="Github Logo" />
          </div>
        </div>
      </div>
      <div className="Home-Left-Second">
        <p>suite</p>
      </div>
      </div>
      <div className="Home-Right">
        <div className="FirstRight-Container">
          <h3  className="Title-Right">A propos de moi:</h3>
          <p className="Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat esse consequuntur fugiat ducimus, optio officia, numquam molestias itaque blanditiis nihil quod quidem cupiditate eos beatae accusamus distinctio inventore vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium tempora ducimus qui deleniti corporis reiciendis. Voluptatem perspiciatis earum eum sunt qui, sit, molestiae natus necessitatibus explicabo possimus excepturi corrupti.loreming Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga cum aut pariatur enim dolores voluptatem esse perferendis neque. Natus in et consequatur delectus modi porro. Dignissimos magni cupiditate dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, quos tempora. Optio modi minima repellat provident ducimus voluptates sed labore excepturi rerum maxime? Corporis, modi reiciendis voluptatum recusandae consequuntur iusto. lorem elit. Doolor laboriosam magni quisquam assumenda vitae labore accusantium, dolorem eum sint, in possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsa nulla quos facere. Error temporibus aut atque dolores vero accusantium excepturi ratione consequuntur reiciendis, ex saepe ipsa nostrum laboriosam architecto.</p>
      </div>
      
        <div className="SecondRight-Container">
          <h3 className="Title-Right">Contact:</h3>
          <p>Email:<span>Jordanserafini74370@gmail.com</span></p>
          <p>LinkedinLogo</p>
          <p>FacebookLogo</p>
          <p>TwitterLogo</p>


        </div>
        </div>

      
    </div>
  );
}

export default Home;
