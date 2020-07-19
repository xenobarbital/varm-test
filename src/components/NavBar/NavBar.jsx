import React from 'react';
import { Menu } from 'antd';
import logo from '../../assets/img/logo.png';
import * as S from './styles';

const { SubMenu, ItemGroup } = Menu;

export const NavBar = () => {
  return (
    <S.NavStyled>
      <S.LogoWrapper>
        <S.Logo src={logo} alt="logo" />
      </S.LogoWrapper>
      <S.MenuCon>
        <S.MenuLeft>
          <Menu mode="horizontal">
            <Menu.Item key="mail">
              <a href="">Features</a>
            </Menu.Item>
            <Menu.Item key="mail">
              <a href="">Use Cases</a>
            </Menu.Item>
            <Menu.Item key="mail">
              <a href="">Pricing</a>
            </Menu.Item>
            <Menu.Item key="mail">
              <a href="">Docs</a>
            </Menu.Item>
          </Menu>
        </S.MenuLeft>

        <S.MenuRight>
          <Menu mode="horizontal">
            <Menu.Item key="mail">
              <a href="">Features</a>
            </Menu.Item>
            <Menu.Item key="mail">
              <a href="">Use Cases</a>
            </Menu.Item>
          </Menu>
        </S.MenuRight>
      </S.MenuCon>
    </S.NavStyled>
  );
}
