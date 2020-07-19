import styled from "styled-components";

export const NavStyled = styled.nav`
  padding: 20px;
  height: 35px;
  @media (min-width: 768px) {
    padding: 20px 40px;
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
  width: 100px;
`;

export const MenuCon = styled.div`
  width: calc(100% - 150px);
  float: left;
`;

export const MenuLeft = styled.div`
  float: left;
`;

export const MenuRight = styled.div`
  float: right;
`;