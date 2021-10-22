import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../../features/car/carSlice";
import { useSelector } from "react-redux";

import {
  HeaderContainer,
  LogoImg,
  LogoWrapper,
  Navigation,
  NavLink,
  RightNavigation,
  CustomNavigation,
  BurgerNav,
  BurgerList,
  BurgerListItem,
  NavLinkItem,
  CloseIconWrap,
} from "./HeaderStyleComponent";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <HeaderContainer>
      <LogoWrapper>
        <LogoImg to="/">
          <img src="/images/logo.svg" alt="Logo" />
        </LogoImg>
      </LogoWrapper>
      <Navigation>
        {cars &&
          cars.map((car, index) => (
            <NavLink key={index} to="/">
              {car}
            </NavLink>
          ))}
      </Navigation>
      <RightNavigation>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/">Tesla Account</NavLink>
        <CustomNavigation to="/" onClick={() => setBurgerStatus(true)}>
          <MenuIcon />
        </CustomNavigation>
      </RightNavigation>
      <BurgerNav show={burgerStatus}>
        <BurgerList>
          <CloseIconWrap>
            <CloseIcon onClick={() => setBurgerStatus(false)} />
          </CloseIconWrap>
          {cars &&
            cars.map((car, index) => (
              <NavLinkItem key={index} to="/">
                {car}
              </NavLinkItem>
            ))}
          <BurgerListItem>
            <NavLinkItem to="/">Existing Inventory</NavLinkItem>
          </BurgerListItem>
          <BurgerListItem>
            <NavLinkItem to="/">Using Inventory</NavLinkItem>
          </BurgerListItem>
          <BurgerListItem>
            <NavLinkItem to="/">Trade In</NavLinkItem>
          </BurgerListItem>
          <BurgerListItem>
            <NavLinkItem to="/">Cybertruck</NavLinkItem>
          </BurgerListItem>
          <BurgerListItem>
            <NavLinkItem to="/">Roadster</NavLinkItem>
          </BurgerListItem>
          <BurgerListItem>
            <NavLinkItem to="/">Existing Inventory</NavLinkItem>
          </BurgerListItem>
        </BurgerList>
      </BurgerNav>
    </HeaderContainer>
  );
};

export default Header;
