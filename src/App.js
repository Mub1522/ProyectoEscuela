import "./App.css";
import NavBar from "./componentes/NavBar";
import Footer from "../src/componentes/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <Footer/>
    </div>
  );
}

export default App;

{/* Crea un especie de menú que permite navegar a diferentes componentes en la misma página */}
      {/* <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to={"/"}>Home <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to={"/listar"}>  Empleado</Link> 
              <Link className="nav-item nav-link" to={"/crear"}>   CrearEmpleado</Link>
              <Link className="nav-item nav-link" to={"/editar"}>   EditarEmpleado</Link>
          </div>
      </nav> */}

      {/* <div className="container"> */}
      {/* Muestra lo que hace el elemento Listar */}
      {/* <Route exact path="/" component={Home}></Route> 
    <Route path="/listar" component={Listar}></Route> 
    <Route path="/crear" component={Crear}></Route> 
    <Route path="/editar" component={Editar}></Route>      
    </div> */}