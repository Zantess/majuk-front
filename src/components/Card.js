import React from 'react';
import "../Style/Card.css";
import cardBorder from '../images/cartes/Carte_Modele_Degats_ss_icones.png';


const Card = ({name,type,image,mana,attack,HP,desc,effect, addToDeck, hoverSound}) => {

    return (
        <div className="carte"  onMouseEnter={()=> hoverSound()} onClick={() => addToDeck(name,type,image,mana,attack,HP,desc,effect)} style={{backgroundImage :`url(${image})`}}>
            <img className="carteBord" src={cardBorder} alt="Bord de carte"/>
            <div className="carteName">{name}</div>
            <div className="carteType">{type[0]}{type[1]}</div>
            <div className="carteMana">{mana}</div>
            <div className="carteAttack">{attack}</div>
            <div className="carteHP">{HP}</div>
            <div className="carteDesc">{desc}</div>
            <div className="carteEffect">{effect}</div>
        </div>
    )
}

export default Card;