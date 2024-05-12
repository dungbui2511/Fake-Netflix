import PropTypes from 'prop-types';
import { EpisodeListWrapper } from './EpisodeList.style';
import EpisodeItem from '../EpisodeItem/EpisodeItem';
const EpisodeList = ({episodesData,seasonNo}) => {
    console.log(episodesData,seasonNo);
    const filteredEpisodes = episodesData?.filter(episode=>episode?.season === seasonNo);
    console.log('fl',filteredEpisodes)
  return (
    <EpisodeListWrapper className='grid'>
      {
        filteredEpisodes?.map((episode)=>{
            return <EpisodeItem key={episode?.id} seasonNo={seasonNo} episodesData={episode}/>
        })
      }
    </EpisodeListWrapper>
  )
}
export default EpisodeList;
EpisodeList.propTypes ={
    episodesData:PropTypes.array.isRequired,
    seasonNo:PropTypes.number.isRequired
}
