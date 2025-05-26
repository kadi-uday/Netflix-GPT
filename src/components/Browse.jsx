import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';

const Browse = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header variant='browse'/>
    </div>
  )
}

export default Browse;