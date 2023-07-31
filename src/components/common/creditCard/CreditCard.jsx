import { useState } from "react";

import "./CreditCard.css";

const CreditCard = () => {

    const [isCardFlipped, setIsCardFlipped] = useState(false);
  
    const toggleCardFlip = () => {
        setIsCardFlipped(!isCardFlipped);
      };
  
    return (
        <div
          className={`tarjeta ${isCardFlipped ? "active" : ""}`}
          onClick={toggleCardFlip}
        >
          <div className="delantera">
            <div className="logo-marca" id="logo-marca">
              
            </div>
            <img src="../src/assets/images/chip-tarjeta.png" className="chip" alt="" />
            <div className="datos">
              <div className="grupo" id="numero">
                <p className="label">Número Tarjeta</p>
                <p className="numero">#### #### #### ####</p>
              </div>
              <div className="flexbox">
                <div className="grupo" id="nombre">
                  <p className="label">Nombre Tarjeta</p>
                  <p className="nombre">Nombre Apellido</p>
                </div>
                <div className="grupo" id="expiracion">
                  <p className="label">Expiracion</p>
                  <p className="expiracion">
                    <span className="mes">MM</span> / <span className="year">AA</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="trasera">
            <div className="barra-magnetica"></div>
            <div className="datos">
              <div className="grupo" id="firma">
                <p className="label">Firma</p>
                <div className="firma">
                  <p></p>
                </div>
              </div>
              <div className="grupo" id="ccv">
                <p className="label">CCV</p>
                <p className="ccv"></p>
              </div>
            </div>
            <p className="leyenda">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus exercitationem, voluptates illo.</p>
            <a href="#" className="link-banco">
              www.tubanco.com
            </a>
          </div>
        </div>
    )
}

export default CreditCard;
