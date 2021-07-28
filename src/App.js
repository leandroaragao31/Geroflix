import { createGlobalStyle } from "styled-components";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movies from "./services/Movies";
import Series from "./services/series";
import Home from "./services/Home";
import styled from "styled-components";

const Title = styled.h1`
  background-color: #104e8b;
  display: flex;
  justify-content: center;
  color: #ffff;

  cursor: pointer;
  &:hover {
    color: goldenrod;
  }
`;

const Menu = styled.nav`
  width: 100%;
  border-bottom: 2px #104e8b solid;
  background-color: #104e8b;

  ul {
    display: flex;
    justify-content: space-evenly;
  }
  li {
    list-style: none;
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: 1s;
  &:hover {
    color: goldenrod;
  }
`;

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background-color:#8DB6CD;
  font-family:Arial, Helvetica, sans-serif
}
`;

export default class Geroflix extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Title>Geroflix</Title>
          <Menu>
            <ul>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
              <li>
                <StyledLink to="/series">Series</StyledLink>
              </li>
            </ul>
          </Menu>

          <GlobalStyle />
          {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route exact path="/series">
              <Series />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
