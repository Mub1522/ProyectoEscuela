import React from "react";
import { Link } from "react-router-dom";

class Listar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false, // Cuando la información llega se pasará a true
      grados: [],
    };
  }
  // Se obtiene información
  // -------------------------
  cargarDatos() {
    fetch("http://localhost/pruebas_proyecto/grados.php")
      .then((res) => res.json())
      .then((datosRes) => {
        console.log(datosRes);
        this.setState({ datosCargados: true, grados: datosRes }); // Se pasa a true
      })
      .catch(console.log());
  }

  componentDidMount() {
    this.cargarDatos();
  }
  // --------------------------------------
  render() {
    // Recuperar datos
    // ----------------------------------
    const { datosCargados, grados } = this.state;
    if (!datosCargados) {
      return <div>Cargando...</div>;
    } else {
      return (
        <div className="card">
          <div className="card-header">
            {/* <Link to={""} className="btn btn-success">
              Agregar nuevo grados
            </Link> */}
          </div>
          <div className="card-body">
            <h4>Lista de grados</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Jornada</th>
                  <th>Administrador</th>
                </tr>
              </thead>
              <tbody>
                {grados.map((grados) => (
                  <tr>
                    <td>{grados.id_grado}</td>
                    <td>{grados.nombre_grado}</td>
                    <td>{grados.jornada}</td>
                    <td>{grados.id_admin1}</td>
                    <td>
                      {/* <div className="btn-group" role="group" aria-label="">
                                 <Link to={"Editar"} className="btn btn-warning">
                                   Editar
                                 </Link>
                                 <Link to={""} className="btn btn-danger">
                                   Eliminar
                                 </Link>
                               </div> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default Listar;
