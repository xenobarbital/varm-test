import React, { useState } from 'react';
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from '../../assets/img/logo.png';
import * as S from './styles';

const LeftMenu = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <a href="">Features</a>
      </Menu.Item>
      <Menu.Item>
        <a href="">Use Cases</a>
      </Menu.Item>
      <Menu.Item>
        <a href="">Pricing</a>
      </Menu.Item>
      <Menu.Item>
        <a href="">Docs</a>
      </Menu.Item>
    </Menu>
  );
}

const RightMenu = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item className="li-condensed">
        <Button type="primary">Start Free Trial</Button>
      </Menu.Item>
      <Menu.Item className="li-condensed">
        <Button>Log In</Button>
      </Menu.Item>
    </Menu>
  );
}

export const NavBar = () => {
  const [displayDrawer, setDisplayDrawer] = useState(false);

  const openDrawer = () => setDisplayDrawer(true);

  const closeDrawer = () => setDisplayDrawer(false);

  return (
    <S.NavStyled>
      <S.LogoWrapper>
        <S.Logo src={logo} alt="logo" />
      </S.LogoWrapper>
      <S.MenuCont>
        <S.MenuLeft>
          <LeftMenu />
        </S.MenuLeft>

        <S.MenuRight>
          <RightMenu />
        </S.MenuRight>

        <S.BurgerCont>
          <Button type="text" onClick={openDrawer}>
            <MenuOutlined />
          </Button>
        </S.BurgerCont>
        <Drawer
          placement="right"
          closable
          onClose={closeDrawer}
          visible={displayDrawer}
        >
          <Menu mode="vertical">
            <Menu.Item>
              <a href="">Features</a>
            </Menu.Item>
            <Menu.Item>
              <a href="">Use Cases</a>
            </Menu.Item>
            <Menu.Item>
              <a href="">Pricing</a>
            </Menu.Item>
            <Menu.Item>
              <a href="">Docs</a>
            </Menu.Item>
            <Menu.Item className="li-condensed">
              <Button type="primary">Start Free Trial</Button>
            </Menu.Item>
            <Menu.Item className="li-condensed">
              <Button>Log In</Button>
            </Menu.Item>
          </Menu>
        </Drawer>
      </S.MenuCont>
    </S.NavStyled>
  );
}
