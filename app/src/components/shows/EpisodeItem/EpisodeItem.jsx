import { EpisodeItemWrapper } from "./EpisodeItem.style";
import PropTypes from 'prop-types';
import {Images} from '../../../assets/images';
import {Link} from 'react-router-dom';
const EpisodeItem = ({episodesData}) => {
    console.log('ep',episodesData);
  return (
    <EpisodeItemWrapper>
    <div className="episode-num text-gray60 text-xl flex items-start font-bold">
    {episodesData?.number < 10 ? "0" + episodesData?.number : episodesData?.number}
    </div>
    <div className="episode-full grid">
    <Link to={episodesData?.url} target="_blank" className="episode-img">
      <img
        src={episodesData?.image?.medium || Images.NoImage}
        alt=""
        className="object-fit-cover"
      />
    </Link>
    <div className="episode-body">
      <div className="episode-head">
        <h4 className="text-xl episode-title">{episodesData?.name}</h4>
        <p
          className="episode-summary text-gray60"
          dangerouslySetInnerHTML={{
            __html: episodesData?.summary,
          }}
        ></p>
      </div>
    </div>
  </div>
    </EpisodeItemWrapper>
  )
}
export default EpisodeItem;
EpisodeItem.propTypes ={
    episodesData:PropTypes.object.isRequired
}
