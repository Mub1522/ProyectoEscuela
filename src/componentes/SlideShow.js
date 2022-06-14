import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import imgs1 from "./../imgs/1.png";
import imgs2 from "./../imgs/2.jpg";
import imgs3 from "./../imgs/3.jpg";
import imgs4 from "./../imgs/4.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SlideShow = () => {
  const MostrarSlide = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = useCallback(() => {
    // Comprobamos que el MostrarSlide tenga elementos
    if (MostrarSlide.current.children.length > 0) {
      console.log("Siguiente");

      // Obtenemos el primer elemento del MostrarSlide.
      const primerElemento = MostrarSlide.current.children[0];

      // Establecemos la transicion para el MostrarSlide.
      MostrarSlide.current.style.transition = `${500}ms ease-out all`;

      // Obtenemos el ancho del slide
      const tamañoSlide = MostrarSlide.current.children[0].offsetWidth;

      // Movemos el MostrarSlide
      MostrarSlide.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        // Reiniciamos la posicion del MostrarSlide.
        MostrarSlide.current.style.transition = "none";
        MostrarSlide.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final.
        MostrarSlide.current.appendChild(primerElemento);

        MostrarSlide.current.removeEventListener("transitionend", transicion);
      };

      // Eventlistener para cuando termina la animacion.
      MostrarSlide.current.addEventListener("transitionend", transicion);
    }
  }, []);

  const anterior = () => {
    console.log("Anterior");
    if (MostrarSlide.current.children.length > 0) {
      // Obtenemos el ultimo elemento del MostrarSlide.
      const index = MostrarSlide.current.children.length - 1;
      const ultimoElemento = MostrarSlide.current.children[index];
      MostrarSlide.current.insertBefore(
        ultimoElemento,
        MostrarSlide.current.firstChild
      );

      MostrarSlide.current.style.transition = "none";
      const tamañoSlide = MostrarSlide.current.children[0].offsetWidth;
      MostrarSlide.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        MostrarSlide.current.style.transition = `${500}ms ease-out all`;
        MostrarSlide.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      siguiente();
    }, 5000);

    // Eliminamos los intervalos
    MostrarSlide.current.addEventListener("mouseenter", () => {
      clearInterval(intervaloSlideshow.current);
    });

    // Volvemos a poner el intervalo cuando saquen el cursor del MostrarSlide
    MostrarSlide.current.addEventListener("mouseleave", () => {
      intervaloSlideshow.current = setInterval(() => {
        siguiente();
      }, 5000);
    });
  }, [5000, siguiente]);
  // }, [false, 5000, siguiente]);

  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow ref={MostrarSlide}>
        <Slide>
          <img src={imgs1} alt="primaria1"/>
        </Slide>
        <Slide>
          <img src={imgs2} alt="primaria2"/>
        </Slide>
        <Slide>
          <img src={imgs3} alt="primaria3"/>
        </Slide>
        <Slide>
          <img src={imgs4} alt="primaria4"/>
        </Slide>
      </ContenedorSlideshow>
      <Controles>
        <Boton onClick={anterior}>
          <FaAngleLeft />
        </Boton>
        <Boton derecho onClick={siguiente}>
          <FaAngleRight />
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  position: relative;
`;

const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  max-height: 89vh;
  position: relative;
  img {
    width: 100%;
    vertical-align: top;
  }
`;

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  svg {
    width: 40px;
    height: 40px;
    fill: #000;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    path {
      fill: #fff;
    }
  }
  path {
    filter: ${(props) =>
      props.derecho
        ? "drop-shadow(-2px 0px 0px #fff)"
        : "drop-shadow(2px 0px 0px #fff)"};
  }
  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;

export default SlideShow;
