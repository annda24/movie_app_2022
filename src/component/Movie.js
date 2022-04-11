import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './Movie.css'

// 함수형 컴포넌트
function Movie({id,year,title,summary,poster,genres}) {
  return (
    <div className='movie'>
      <Link to={'/movie_detail'} state={{year,title,summary,poster,genres}} > 
      {/* a; div.movie를 클릭하면 movie_detail.로 이동
        state={}는 해당 객체를 상속시킬때 이용
       */}

        <img src={poster} alt ={title} title={title} />
        <div className='movie_data'>
            <h3 className='movie_title' style={{'backgroundColor':'#eee'}}>{title}</h3>   
            <h4 className='movie_year'>{year}</h4>
            <ul className='movie_genres'>
                { genres.map( (genre,index) => { return (<li key={index} className="movie_genre">{genre}</li>) } )  }
            </ul>
            <p className='movie_summary'>{summary.slice(0,180)} ...</p>
        </div>     
      </Link>
    </div>
  )
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie