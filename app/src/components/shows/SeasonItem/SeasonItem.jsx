import { HeadingTitleMd, Text } from "../../../styles/global/default"
import { SeasonItemWrapper } from "./SeasonItem.style"
import {Icons} from '../../../assets/Icons';
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectShowEpisodes } from "../../../redux/selectors/showsSelectors";
import EpisodeList from "../EpisodeList/EpisodeList";
const SeasonItem = ({seasonsData}) => {
    const [isCollapsed,setIsCollapsed] = useState(true);
    const  episodesData = useSelector(selectShowEpisodes);
    console.log('ss',seasonsData);
    console.log('ep',episodesData);
    const handleAccordion = ()=>{
        setIsCollapsed(!isCollapsed);
    }
    console.log(isCollapsed);
    useEffect(()=>{
        if(seasonsData?.number === 1) setIsCollapsed(false);
    },[]);
  return (
    <SeasonItemWrapper className="bg-black06">
      <div className="season-head flex items-center justify-between">
      <div className="season-head-title flex items-center flex-wrap">
      <HeadingTitleMd>Season {seasonsData?.number}</HeadingTitleMd>
      <Text>{seasonsData?.episodeOrder} Episodes</Text>
      </div>
      <button onClick={handleAccordion} className="season-head-btn inline-flex items-center justify-center">
      <img src={Icons.ArrowDownGrey}/>
      </button>
      </div>
      <div className={`season-body ${!isCollapsed ? "show" : ""}`}>
      {
        episodesData &&(
            <EpisodeList seasonNo={seasonsData?.number} episodesData={episodesData}/>
        )
      }
      </div>
    </SeasonItemWrapper>
  )
}
export default SeasonItem;
SeasonItem.propTypes = {
    seasonsData:PropTypes.object.isRequired
}
