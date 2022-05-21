import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
  background-repeat:no-repeat;
  background-size:cover;
  background-image:url(https://pa1.narvii.com/6638/414a0326ec77cf4ca7956b1b9eec9a296e327b20_hq.gif);
  @media (max-width:1440){
    width:100%;

  }
}

`;

const Icones = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 1000px;
`;

const Card = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const SubTitle = styled.h2`
  margin-top: 4vh;
  margin-bottom: 2vh;
  font-size: 4vh;
  color: white;
  transition: 1s;
  cursor: pointer;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const Footer = styled.footer`
  height: 20vh;
  background-color: #104e8b;
`;

const Photo = styled.img`
  width: 250px;
  height: 250px;
  transition: 1s;
  border-radius: 50px;
  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
  &:hover {
    transform: scale(120%);
    -webkit-box-shadow: 5px 5px 15px 5px #000000;
    box-shadow: 5px 5px 15px 5px #000000;
  }
`;

export default class Home extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Card>
          <a href="https://9q5br.csb.app/movies" alt="site movies">
            <Photo
              src="https://logos.flamingtext.com/Name-Logos/Flix-design-stripes-name.gif"
              alt="movies"
            />
          </a>
          <a href="https://9q5br.csb.app/series" alt="">
            <Photo
              src="http://www.adirferreira.com.br/wp-content/uploads/2015/09/TV-Series.png"
              alt=""
            />
          </a>
        </Card>
        <Footer>
          <SubTitle>Seja Seguidor e Apoie Mais Trabalhos!</SubTitle>
          <a
            target="_blank"
            href="https://github.com/leandroaragao31"
            alt="user"
          >
            <Icones
              src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
              alt="GitHub"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/leandro-aragao-522841207/"
            alt=""
          >
            <Icones
              src="https://image.flaticon.com/icons/png/128/1400/1400832.png"
              alt="Linkedin"
            />
          </a>
        </Footer>
      </>
    );
  }
}
