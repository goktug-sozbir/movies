/* eslint-disable no-undef */
import React,{Component} from 'react';
import SearchBar from './searchBar';
import MovieList from './movieList';
import axios from 'axios';  

class App extends Component {

    state = {

         movies: [ ],

         searchQuery:"",

    }

    

    //axios get
    async componentDidMount() {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        console.log(response.data.results);
        this.setState({movies: response.data.results})
    }       
     
    //axios delete
    deletMovie = (movie) => {
        axios.delete(`http://localhost:3001/movies/${movie.id}`);
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (e) => {
        this.setState({searchQuery: e.target.value})
    }

    

    render() {

        let filterMovies = this.state.movies.filter(
                (movie) => {
                    return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
                } 
            )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieprop={this.searchMovie}/>
                    </div>
                </div>
                <MovieList
                    movies={filterMovies}
                    deleteMovieProp = {this.deletMovie}
                />
            </div>
        )
    }
    
};

export default App;

