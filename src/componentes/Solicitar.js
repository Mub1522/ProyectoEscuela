import React from "react";
import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import CustomSelect from "./ComponentSelect";
import "./Solicitar.css";

const Solicitar = () => {
  const validate = Yup.object({
    nombreAspi: Yup.string().required('Por favor ingrese el nombre del aspirante'),
    apellidoAspi: Yup.string().required('Por favor ingrese el apellido del aspirante'),
    fechaNAspi: Yup.date().required('Por favor ingrese la fecha de nacimeinto del aspirante'),
    tarjetaAspi: Yup.number().min(99999, 'La tarjeta no debe contener menos de 6 números').max(99999999999, 'La tarjeta no puede tener más de 11 valores').required('Por favor ingrese la tarjeta del aspirante'),
    generoAspi : Yup.string().required('Por favor ingrese el género del aspirante'),
    grado: Yup.string().required('Por favor ingrese el grado'),
    nombreAcudi: Yup.string().required('Por favor ingrese el nombre del acudiente'),
    apellidoAcudi: Yup.string().required('Por favor ingrese el apellido del acudiente'),
    cedula: Yup.number('Solo se permiten números').min(99999, 'La cédula no debe contener menos de 6 números').max(99999999999, 'La cédula no puede tener más de 11 valores').required('Por favor ingrese la cédula del acudiente'),
    telefonoAcudi: Yup.number('Solo se permiten números').min(999999, 'El telefono no puede contener menos de 7 valores').required('Por favor ingrese el telefono del acudiente'),
    direccion: Yup.string().required('Por favor ingrese la dirección del acudiente')
  })

  return (
    <>
      <Formik 
        initialValues={{
            nombreAspi: '',
            apellidoAspi: '',
            fechaNAspi: '',
            tarjetaAspi: 0,
            generoAspi: '',
            grado:'',
            nombreAcudi: '',
            apellidoAcudi: '',
            cedula: 0,
            telefonoAcudi: 0,
            direccion:''
        }
      }

        validationSchema={validate}

        onSubmit={(valores, {resetForm})=>{
            // Debe enviar la información a una api
            resetForm();
            console.log(valores);
            alert("Solicitud enviada. En un momento nos comunicaremos con usted.");  
        }}
      >

        {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
          <form className="formulario" onSubmit={handleSubmit}>
            {/* Formik identifica todos los inputs con los name */}
            <h4>Información del aspirante</h4>
            <div>
              <label htmlFor="nombreAspi">Nombre</label>
              <input
                type="text"
                name="nombreAspi"
                placeholder="Ingresa el nombre del aspirante"
                id="nombreAspi"
                value={values.nombreAspi}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombreAspi && errors.nombreAspi && <div className="error">{errors.nombreAspi}</div>}
            </div>

            <div>
              <label htmlFor="apellidoAspi">Apellido</label>
              <input
                type="text"
                name="apellidoAspi"
                placeholder="Ingresa el apellido del aspirante"
                id="apellidoAspi"
                value={values.apellidoAspi}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.apellidoAspi &&  errors.apellidoAspi && <div className="error">{errors.apellidoAspi}</div>}
            </div>

            <div>
              <label htmlFor="fechaNAspi">Fecha de nacimiento</label>
              <input
                type="date"
                name="fechaNAspi"
                placeholder="Ingresa la fecha de nacimiento del aspirante"
                id="fechaNAspi"
                value={values.fechaNAspi}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.fechaNAspi && errors.fechaNAspi && <div className="error">{errors.fechaNAspi}</div>}
            </div>

            <div>
              <label htmlFor="tarjetaAspi">Tarjeta de identidad</label>
              <input
                type="number"
                name="tarjetaAspi"
                placeholder="Ingrese el documento del aspirante"
                id="tarjetaAspi"
                value={values.tarjetaAspi}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.tarjetaAspi && errors.tarjetaAspi && <div className="error">{errors.tarjetaAspi}</div>}
            </div>

            <div>
              <label htmlFor="generoAspi">Genero</label>
              <CustomSelect className="select"
                label=""
                name="generoAspi"
                type="text"
                placeholder="Seleccione el genero" 
              >
                <option value="">Por favor seleccione el género</option>
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
              </CustomSelect>  
              {touched.generoAspi && errors.generoAspi && <div className="error">{errors.generoAspi}</div>}
            </div>

            <div>
              <label htmlFor="grado">Grado</label>
              <CustomSelect className="select"
                label=""
                name="grado"
                type="text"
                placeholder="Seleccione el grado" 
              >
                <option value="">Por favor seleccione el grado</option>
                <option value="Primero">Primero</option>
                <option value="Segundo">Segundo</option>
                <option value="Tercero">Tercero</option>
                <option value="Cuarto">Cuarto</option>
                <option value="Quinto">Quinto</option>
              </CustomSelect> 
              {touched.grado && errors.grado && <div className="error">{errors.grado}</div>}
            </div>
            <h4>Información del acudiente</h4>
            <div>
              <label htmlFor="nombreAcudi">Nombre</label>
              <input
                type="text"
                name="nombreAcudi"
                placeholder="Ingrese el nombre del acudiente"
                id="nombreAcudi"
                value={values.nombreAcudi}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombreAcudi && errors.nombreAcudi && <div className="error">{errors.nombreAcudi}</div>}
            </div>

            <div>
              <label htmlFor="apellidoAcudi">Apellido</label>
              <input
                type="text"
                name="apellidoAcudi"
                placeholder="Ingrese el apellido del acudiente"
                id="apellidoAcudi"
                value={values.apellidoAcudi}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.apellidoAcudi && errors.apellidoAcudi && <div className="error">{errors.apellidoAcudi}</div>}
            </div>

            <div>
              <label htmlFor="cedula">Cédula</label>
              <input
                type="number"
                name="cedula"
                placeholder="Ingrese la cédula del acudiente"
                id="cedula"
                value={values.cedula}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.cedula && errors.cedula && <div className="error">{errors.cedula}</div>}
            </div>

            <div>
              <label htmlFor="telefonoAcudi">Telefono</label>
              <input
                type="number"
                name="telefonoAcudi"
                placeholder="Ingrese el teléfono del acudiente"
                id="telefonoAcudi"
                value={values.telefonoAcudi}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.telefonoAcudi && errors.telefonoAcudi && <div className="error">{errors.telefonoAcudi}</div>}
            </div>

            <div>
              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                name="direccion"
                placeholder="Ingrese la dirección del acudiente"
                id="direccion"
                value={values.direccion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.direccion && errors.direccion && <div className="error">{errors.direccion}</div>}
            </div>

            <button type="submit">Enviar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Solicitar;

