import React from "react";
import "./Footer.css";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="mb-4">
        <div className="row">
          {/* Column 1*/}
          <ul className="col-3 list-unstyled">
            <li className="title">Dirección</li>
            <li>Calle 7 #13-58</li>
            <li>Pradera, valle</li>
          </ul>

          <ul className="col-3 list-unstyled">
            <li className="title">Teléfono</li>
            <li>3123450932</li>
            <li>4203232</li>
          </ul>

          <ul className="col-3 list-unstyled">
            <li className="d-flex justify-content-between">
              <a href="https://www.facebook.com/Colegio-Tio-Conejo-782519178759254/" target="_blank" className="text-reset"><FaFacebook/></a>
              <a href="https://wa.me/573123450932?text=Quiero%20que%20mi%20hijo%20estudie%20aqui" target="_blank" className="text-reset"><FaWhatsapp/></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-white p-3, colorFB">
        © 2020 Copyright: MDBootstrap.com
      </div>
    </div>
  );
};

export default Footer;
