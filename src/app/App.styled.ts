import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppLayout = styled.div`
  color: white;
  font-family: 'Roboto', sans-serif;
`;

export const NavBar = styled.div`
  display: flex;
  height: 40px;
  padding: 5px 0 0 1px;

  background-color: white;
`;

export const NavBarItem = styled(NavLink)`
  width: 150px;
  font-weight: bold;
  background-color: gray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;

  margin-right: 1px;
  text-align: center;
  line-height: 40px;
  vertical-align: middle;

  &.active {
    background-color: black;
  }
`;
