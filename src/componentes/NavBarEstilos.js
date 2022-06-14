import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #000;
  margin-bottom: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  p {
    &:nth-child(2) {
      color: #fff;
      margin-top: 15px;
    }
  }
  svg {
    margin-bottom: 10px;
    fill: #fff;
    margin-right: 0.8rem;
  }
  img{
    width: 40px;
    margin-bottom: 10px;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 960px) {
    z-index: 100;
    background-color: #000;
    position: absolute;
    top: 70px;
    left: ${({ open }) =>
      open
        ? "0"
        : "-100%"}; //Permite que se muestre y oculte el menú cuando está en pantalla pequeña
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: ce;
    align-items: right;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #fff;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
  svg {
    margin-right: 7px;
  }
  &:hover {
    background-color: #d4d4d4;
    transition: 0.5s all ease;
    .link{
      color: #000;
    }
    svg {
      fill: #000;
    }
    .nav-item {
      color: #000;
    }
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .link{
      text-decoration: none;
      color: #fff;
    }
    svg {
      display: none;
      fill: #fff;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    div {
      width: 30%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #fff;
      margin-right: 0.5rem;
    }
  }
`;
