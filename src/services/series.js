import axios from "axios";
import React from "react";
import Box from "../Components/Box";
import styled from "styled-components";

const SeriesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=en-US&page=1https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=en-US&page=1"
});

const MainBox = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubBox = styled.div`
  border-bottom: 0.1px solid;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Poster = styled.img`
  width: 200px;
  height: 250px;
`;

const Card = styled.section`
  margin-top: 8vh;
`;

const Search = styled.input`
  background-color: #f4f4f4;
  border-radius: 10000px;
  margin-top: 4vh;
  margin-bottom: 1vh;
  width: 50%;
  padding: 5px 6px;
  border: transparent;
  transition: 1s;
  ::placeholder {
    color: #333333;
    opacity: 0.8;
  }
  &:hover {
    background-color: #e0ffff;
  }
`;

const SubTitle = styled.h2`
  margin-top: 4vh;
  margin-bottom: 2vh;
  font-size: 6vh;
  color: white;
  transition: 1s;
  cursor: pointer;
  &:hover {
    color: gold;
    transform: scale(120%, 20deg);
  }
`;

const Sinopse = styled.p`
  text-align: justify;
`;

export default class Series extends React.Component {
  state = {
    series: [],
    filter: []
  };

  componentDidMount() {
    this.getSeries();
  }

  getSeries = async () => {
    const response = await SeriesApi.get();

    const posterSeries = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      series: posterSeries
    });
  };

  render() {
    return (
      <MainBox>
        <SubBox>
          <SubTitle>Series em Destaque</SubTitle>
          <Search
            placeholder="Pesquise Aqui"
            type="text"
            name="title"
            arial-label="pesquise aqui"
          />
        </SubBox>
        <Card>
          {this.state.series.map((item, index) => (
            <Box key={index}>
              <h2>{item.name}</h2>
              <Poster src={item.poster_path} alt="imagem" />
              <p>Rate: {item.vote_average}</p>
              <h3>Sinopse</h3>
              <Sinopse>{item.overview}</Sinopse>
            </Box>
          ))}
        </Card>
      </MainBox>
    );
  }
}
