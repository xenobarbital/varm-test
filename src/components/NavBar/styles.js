import styled from "styled-components";

export const NavStyled = styled.nav`
  padding: 20px;
  margin-bottom: 30px;
  height: 35px;
  @media (min-width: 768px) {
    padding: 20px 20px;
  }
  @media (min-width: 992px) {
    padding: 20px 80px;
  }
  @media (min-width: 1200px) {
    padding: 20px 120px;
  }
  @media (min-width: 1600px) {
    padding: 20px 160px;
  }
`;

export const LogoWrapper = styled.div`
  float: left;
  display: flex;
  height: 47px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 80px;
  @media (min-width: 768px) {
    width: 100px;
  }
`;

export const MenuCont = styled.div`
  width: calc(100% - 150px);
  float: left;
`;

export const MenuLeft = styled.div`
  float: left;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 992px) {
    padding-left: 100px;
  }
  @media (min-width: 1200px) {
    padding-left: 150px;
  }
  @media (min-width: 1600px) {
    padding-left: 300px;
  }
`;

export const MenuRight = styled.div`
  float: right;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const BurgerCont = styled.div`
  float: right;
  height: 47px;
  margin-right: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;