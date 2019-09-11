import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
    // Render: componentWillMount() -> render() -> componentDidMount()
    // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component

    state = {
        
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                movies: [
                    {
                        title: "신세계",
                        poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6b/%EC%98%81%ED%99%94_%EC%8B%A0%EC%84%B8%EA%B3%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/250px-%EC%98%81%ED%99%94_%EC%8B%A0%EC%84%B8%EA%B3%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
                    },
                    {
                        title: "매트릭스",
                        poster: "https://t1.daumcdn.net/movie/e49c2e4eb419a9813228b5ab6bc5b039362236ea"
                    },
                    {
                        title: "타짜",
                        poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a9/%ED%83%80%EC%A7%9C_%28%EC%98%81%ED%99%94%29.jpg/250px-%ED%83%80%EC%A7%9C_%28%EC%98%81%ED%99%94%29.jpg"
                    },
                    {
                        title: "말죽거리잔혹사",
                        poster: "https://i.ytimg.com/vi/oSjFj3Ma5-Q/maxresdefault.jpg"
                    },
                    {
                        title: "트랜스포머",
                        poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/e/e4/%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg/250px-%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg"
                    }
                ]
            })
        }, 3000)
    }

    _renderMovies = () => {
        return this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />
        })
    }

    render() {
        return (
            <div className="App">
                {this.state.movies ? this._renderMovies() : 'Loading'}
            </div>
        );
    }
}

export default App;
