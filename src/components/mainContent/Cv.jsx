import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

function Cv() {
  return (
    <div className="Cv">
      <div className="FirstBlock">
        <div className="Competence">
          Competence, portofoglio
        </div>
        <div className="Info">
          <div className="InfoPerso">
            <h3>informations personnelles</h3>
            <ul>
              <li className="infoList">NOM: Jordan SERAFINI - Date de Naissance: 21/01/1990</li>
              <li className="infoList">
                <FontAwesomeIcon icon={faHome} /> Adresse: 7 avenue de loverchy, 74000 Annecy
              </li>
              <li className="infoList">
                <FontAwesomeIcon icon={faPhone} /> Téléphone: 0627086475
              </li>
              <li className="infoList">
                <FontAwesomeIcon icon={faEnvelope} /> Email: Jordanserafini.74@gmail.com
              </li>
              <li className="infoList">
                <FontAwesomeIcon icon={faBirthdayCake} /> 
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="SecondBlock"></div>
    </div>
  );
}

export default Cv;
