import etab from './images/etab.svg';
import { useState } from 'react';
import BoutonBienEtre from '../components/popups/PopupBienEtre'
import BoutonEssentiels from '../components/popups/PopupEssentiels'
import BoutonIncidents from '../components/popups/PopupIncidents'
import BoutonPrevention from '../components/popups/PopupPrevention'
import React from 'react';
import Linechart from '../components/Graph/Linechart';
import popupBienEtre from './images/popupBienEtre.svg';
import popupEssentiel from './images/popupEssentiel.svg';
import popupPrevention from './images/popupPrevention.svg';
import blocIncident from './images/blocIncident.svg';


function Etablissement() {
  const [buttonBienEtre, setButtonBienEtre] = useState(false);
  const [buttonEssentiels, setButtonEssentiels]= useState(false);
  const [buttonIncidents, setButtonIncidents] = useState(false);
  const [buttonPrevention, setButtonPrevention] = useState(false);

  return (
    <div className='etablissement'>
        <div className='MonEtab'>
          <div className='NoteEtab'>
            <h3 className='NoteEtabG'>Note Globale : <b>2,28</b>/5</h3>
          </div>
          <div className='NomEtab'>
            <h1>BRUNE</h1>
          </div>  
        </div>
        <div className='ImgTxtEtab'>
          <div className='ImgEtab'>
          <img height={1500} src={etab} alt="etablissement"/>
        </div>
        <div className='TxtEtab'>
          <h2 className='Salles'>L'ESSENTIEL</h2>
          <p className='Salles1'>
            La note de la salle L'essentiel est définie en fonction du <strong>taux d'occupation</strong> enregistré le mois précédent pour l'établissement, 
            ainsi que le <strong>nombre de sorties et d'entrées</strong> sur les 6 derniers mois.
          </p>
          <button onClick={ () => setButtonEssentiels(true)} className='Buttons'>Voir les données</button>

          <BoutonEssentiels trigger={buttonEssentiels} setTrigger={setButtonEssentiels}>

            <div>
            <img width={1600} src={popupEssentiel} alt="PopupEssentiel"/>
            </div>

          </BoutonEssentiels>

          <h2 className='Salles'>BIEN-ETRE</h2>
          <p className='Salles1'>
            La note de la salle Bien-être est définie en fonction du <strong>ratio employés/résidents</strong> du mois en cours ainsi 
            que de la <strong>fréquence de l'évaluation de la douleur</strong>, de la <strong>mesure de poids</strong> et de <strong>visite médical.</strong> La <strong>note google</strong> de l'établissement est également pris en compte.
          </p>
          <button onClick={ () => setButtonBienEtre(true)} className='Buttons'>Voir les données</button>

          <BoutonBienEtre trigger={buttonBienEtre} setTrigger={setButtonBienEtre}>

            <div>
            <img width={1600} src={popupBienEtre} alt="PopupBienEtre"/>
            </div>

          </BoutonBienEtre>

          <h2 className='Salles'>INCIDENTS</h2>
          <p className='Salles1'>
            La note de la salle Incidents est définie en fonction de la <strong>moyenne de chutes par résident</strong> du mois précédent, du <strong>pourcentage des 
            sorties classiques contre celui des sorties cause décès</strong> ainsi que le <strong>pourcentage des décès cause chutes contre celui des décès cause vieillesse.</strong>
          </p>
          <button onClick={ () => setButtonIncidents(true)} className='Buttons'>Voir les données</button>

          <BoutonIncidents trigger={buttonIncidents} setTrigger={setButtonIncidents}>

            <h3 className='iTitre'>INCIDENTS</h3>
            <div className="i2ndblock">
            <h3 className="isoustitre">SORTIES</h3>
            <div className='SortiesTitres'>
              <div className='titre'>
                <h4 className="moychutes">POURCENTAGES DE SORTIES </h4>
                <p className="i2020m">CALCULE PAR AN ENTRE 2014 ET 2019 SUR 100% DES SORTIES</p>
              </div>
              <div className='titre'>
                <h4 className="moychutes">POURCENTAGES DE SORTIES DECES</h4>
                <p className="i2020m">CALCULE PAR AN ENTRE 2014 ET 2019 SUR 100% DES SORTIES</p>
              </div>
              </div>
              <img height={145} src={blocIncident} alt="blocIncidents"/>
            </div>
            <div className="ifirstblock">
                  <h3 className="isoustitre">CHUTES</h3>
                  <h4 className="moychutes1">MOYENNE DE CHUTES PAR RESIDENTS :</h4>
                  <p className="i20201">Calculé par an entre 2014 et 2019</p>
                  <div className="lineGraph">
                    <Linechart />
                  </div>
            </div>

          </BoutonIncidents>
          <h2 className='Salles'>PREVENTION</h2>
          <p className='Salles1'>
            La note de la salle Prédiction est définie en fonction du <strong>nombre de cas à risque "en attente" et "sécurisé"</strong> ainsi que <strong>l'âge des résidents</strong> dans les 2 années à venir.
          </p>
          <button onClick={ () => setButtonPrevention(true)} className='Buttons'>Voir les données</button>

          <BoutonPrevention trigger={buttonPrevention} setTrigger={setButtonPrevention}>

          <div>
            <img width={1600} src={popupPrevention} alt="PopupPrevention"/>
          </div>

          </BoutonPrevention>

          </div>
        </div>
    </div>
  );
}



export default Etablissement;
