import axios from 'axios';
import React, { Component } from 'react'
import Movie from '../component/Movie'
import './Home.css';

// 클래스형 컴포넌트
export class Home extends Component {
  state = {
    isLoading : true,
    movies : []
  }
  getMovies = async () => {
    // render의 movies 변수에 저장
    const {data : {data : {movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    console.log(movies);

    // state의 movies에 저장
    this.setState({ isLoading : false, movies });
  }
  componentDidMount(){// 페이지가 생성될 때 필요한 작업을 여기에 작성함.
    /*
    // 6초 뒤에 isLoading : false 적용
    setTimeout( ()=>{
      this.setState( {isLoading:false} );
    },6000 )

    // axios로 list_movie.json 가져오기
    axios.get('https://yts-proxy.now.sh/list_movies.json');
    */
    this.getMovies();
  }// render 위에 작성하여 setTimeout이 실행 된 후 render가 실행됨.

  render() {
    const {isLoading, movies} = this.state; // 구조 분해 할당
    return (
      <section className='container'>
        {isLoading ? 
        ( <div className='loader'>
        <span className='loader_text'>'Loading...'</span>
      </div>) : 
        (<div className='movies'>
          {movies.map((movie,index) => (  <Movie 
                                            key = {index}
                                            id = {movie.id}
                                            year={movie.year}
                                            title={movie.title}
                                            summary={movie.summary}
                                            poster={movie.medium_cover_image}
                                            genres={movie.genres}
                                          />
                                        )
            )//movies.map
          }
        </div>)
        
        }
      </section>
    )
  }
}

export default Home;