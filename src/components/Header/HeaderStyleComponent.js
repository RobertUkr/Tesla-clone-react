import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

export const LogoWrapper = styled.div``;

export const LogoImg = styled(Link)``;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
`;
export const RightNavigation = styled.div`
  display: flex;
  align-items: center;
`;
export const CustomNavigation = styled(Link)``;
export const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 100%;
  max-width: 300px;
  height: 99vh;
  z-index: 100;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s ease-in-out;
`;
export const BurgerList = styled.ul`
  padding: 20px;
`;
export const BurgerListItem = styled.li``;
export const NavLinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  font-weight: 600;
`;

export const CloseIconWrap = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`;
