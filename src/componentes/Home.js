import React from "react";
import "./Home.css";
import imgs1 from "./../imgs/Img4.png";
import { Link } from "react-router-dom";
import SlideShow from "./SlideShow";
import Solicitar from "./Solicitar";

const Home = () => {
  return (
    <div>
      <main className="main">
        <SlideShow/>
      </main>
      <div className="bloque1">
      <div className="img"><img src={imgs1} alt="Dibujo de niños"/></div>
      <div className="p">
      <p>
        Somos un colegio privado de la ciudad de pradera valle, que ofrece a los
        niños una educación básica primaria desde el grado primero hasta quinto.
        se encuentra ubicado sobre la calle 7 #13-58, dado a su ubicación
        céntrica hace que sea muy apetecido por los padres, pero más allá de
        eso, es el compromiso y buen manejo educacional que rigen a los maestros
        de este colegio.
      </p>
      </div>
      
      </div>
      <div className="bloque2">
        <h1 className="h1">¿Deseas matricularte?</h1>
        <h2>Envía tu solicitud</h2>
        <Link to={'Solicitar'} className="btn btn-outline-info">Solicitud</Link>
      </div>
    </div>
  );
};

export default Home;
