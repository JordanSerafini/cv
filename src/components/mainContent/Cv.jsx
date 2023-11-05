import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

// Assurez-vous que le chemin d'importation est correct pour le PDF.
const pdfUrl = '../assets/cv-alternance.pdf';

function Cv() {
  return (
    <div className="Cv">
      {/* Intégration du PDF dans la page */}
      <object 
        data={pdfUrl} 
        type="application/pdf" 
        width="100%" 
        height="600">
          {/* Message pour les navigateurs qui ne peuvent pas afficher le PDF */}
          <p>Votre navigateur ne peut pas afficher le PDF. 
             <a href={pdfUrl}>Cliquez ici pour télécharger le CV.</a>
          </p>
      </object>

      {/* Bouton de téléchargement */}
      <a href={pdfUrl} download="CV-Alternance.pdf">
        <button className="download-button">
          <FontAwesomeIcon icon={faDownload} /> Télécharger le CV
        </button>
      </a>
    </div>
  );
}

export default Cv;
