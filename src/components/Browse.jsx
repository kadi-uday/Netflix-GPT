import useActionThriller from '../hooks/useActionThriller';
import useHorrorMovies from '../hooks/useHorrorMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useActionThriller();
  useHorrorMovies();
  return (
    <div>
      <Header variant='browse'/>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;