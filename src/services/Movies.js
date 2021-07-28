import axios from "axios";
import React from "react";
import styled from "styled-components";
import Box from "../Components/Box";
const MainBox = styled.main`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubBox = styled.div`
  border: 0.1px solid;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Poster = styled.img`
  width: 200px;
  height: 250px;
`;

const Card = styled.section`
  margin-top: 8vh;
`;

const SubTitle = styled.h2`
  margin-top: 4vh;
  margin-bottom: 2vh;
  font-size: 6vh;
  color: white;
  transition: 1s;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: gold;
    transform: scale(120%, 20deg);
  }
`;

const Sinopse = styled.p`
  text-align: justify;
`;
const MoviesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=en-US&page=1https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=en-US&page=1"
});

class Movies extends React.Component {
  state = {
    movies: [],
    filterItem: []
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const response = await MoviesApi.get();

    const poster = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });
    this.setState({
      movies: poster,
      filterItem: poster
    });
  };

  handleChange = (e) => {
    const { filmes } = this.state;
    if (e.target.value === "") {
      this.setState({
        filterItem: filmes
      });
      return;
    }
    const filterConvert = filmes.filter((item) => {
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      }
      return false;
    });
    this.setState({
      filterItem: filterConvert
    });
  };

  render() {
    return (
      <>
        <MainBox>
          <SubBox>
            <SubTitle>Filmes em Destaque</SubTitle>
            <Search
              onChange={this.handleChange}
              placeholder="Pesquise Aqui"
              type="text"
              name="title"
              arial-label="pesquise aqui"
            />
          </SubBox>
          {this.state.filterItem.map((item, index) => (
            <Card key={index}>
              <Box>
                <h2>{item.title}</h2>
                <p>Rate: {item.vote_average}</p>
                <Poster src={item.poster_path} alt="films" />
                <p>Languague:{item.original_language}</p>
                <h3>Sinopse:</h3>
                <Sinopse>{item.overview}</Sinopse>
              </Box>
            </Card>
          ))}
        </MainBox>
      </>
    );
  }
}

export default Movies;
