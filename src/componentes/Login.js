import React from "react";
import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import imgs1 from "./../imgs/usuario.png";
import "./Solicitar.css";
import Listar from "./Listar";
import { Link } from "react-router-dom";

const Solicitar = () => {
  const validate = Yup.object({
    nombre_usuario: Yup.string().required('Por favor ingrese su usuario'),
    password: Yup.string().required('Por favor ingrese su contraseña')
  })

  return (
    <>
      <Formik 
        initialValues={{
            nombre_usuario: '',
            password: ''
        }
      }

        validationSchema={validate}

        onSubmit={(valores, {resetForm})=>{
            //Debe redireccionar a una página
            resetForm();
            //console.log(valores); 
        }}
      >

        {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
          <form className="formulario" onSubmit={handleSubmit}>
            {/* Formik identifica todos los inputs con los name */}
            <img src={imgs1} alt="Login"/>
            <div>
              <label htmlFor="nombre_usuario">Usuario</label>
              <input
                type="text"
                name="nombre_usuario"
                placeholder="Ingresa el nombre del aspirante"
                id="nombre_usuario"
                value={values.nombre_usuario}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre_usuario && errors.nombre_usuario && <div className="error">{errors.nombre_usuario}</div>}
            </div>

            <div>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="Ingrese su contraseña"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password &&  errors.password && <div className="error">{errors.password}</div>}
            </div>

            <button src="{Listar}" type="submit">Enviar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Solicitar;