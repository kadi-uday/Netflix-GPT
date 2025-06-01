import { useSelector } from 'react-redux';
import useActionThriller from '../hooks/useActionThriller';
import useHorrorMovies from '../hooks/useHorrorMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useActionThriller();
  useHorrorMovies();

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  return (
    <div className='bg-black'>
      <Header variant='browse'/>

      {
        showGptSearch? <GptSearch /> : 
        <>
          <MainContainer />
          <SecondaryContainer />
        </> 
      }
      
    </div>
  )
}

export default Browse;