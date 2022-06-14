import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  MenuItem,
  MenuItemLink,
  Wrapper,
  Menu,
  MobileIcon,
} from "./NavBarEstilos";
import { FaBars, FaTimes, FaHome, FaRegEnvelope, FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import imgs1 from "./../imgs/conejo.png";
import Home from "./Home";
import Solicitar from "./Solicitar";
import Login from "./Login";

const NavBar = () => {
  const [showMobileMenu, setMobileMenu] = useState(false);

  return (
    <BrowserRouter>
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
            <LogoContainer>
              <img src={imgs1} alt="conejo1" />
              <p>Tío Conejo</p>
              <img src={imgs1} alt="conejo2" />
            </LogoContainer>
            <MobileIcon onClick={() => setMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <Menu open={showMobileMenu}>
              <MenuItem>
                <MenuItemLink onClick={() => setMobileMenu(!showMobileMenu)}>
                  <FaHome />
                  <div>
                    <Link className="link" to={"/"}>Home</Link>
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink onClick={() => setMobileMenu(!showMobileMenu)}>
                  <FaRegEnvelope />
                  <div>
                    <Link className="link" to={"/Solicitar"}>Solicitar</Link>
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink onClick={() => setMobileMenu(!showMobileMenu)}>
                  <FaUser />
                  <div>
                    <Link className="link" to={"/Login"}>Login</Link>
                  </div>
                </MenuItemLink>
              </MenuItem>
            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>

      <Switch>
        <Route path={"/Solicitar"}>
          <Solicitar />
        </Route>
        <Route path={"/Login"}>
          <Login />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>

    </BrowserRouter>
  );
};

export default NavBar;
