import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Cv() {
  // Le fichier PDF est référencé directement depuis le dossier public
  const pdfUrl = '/cv-alternance.pdf';

  return (
    <div className="Cv">
      {/* Intégration du PDF dans la page avec iframe */}
      <iframe 
        src={pdfUrl}
        width="100%"
        height="600"
        title="CV"
        style={{ border: 'none' }}>
        {/* Message pour les navigateurs qui ne peuvent pas afficher le PDF */}
        <p>Votre navigateur ne peut pas afficher le PDF. 
           <a href={pdfUrl} download>Click here to download the CV.</a>
        </p>
      </iframe>

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
