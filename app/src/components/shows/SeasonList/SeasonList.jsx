import { useSelector } from "react-redux"
import { SeasonListWrapper } from "./SeasonList.style"
import { selectShowsSeasons } from "../../../redux/selectors/showsSelectors"
import {HeadingTitleMd } from "../../../styles/global/default";
import SeasonItem from "../SeasonItem/SeasonItem";

const SeasonList = () => {
    const seasonsData = useSelector(selectShowsSeasons);
console.log(seasonsData);
  return (
    <SeasonListWrapper className="detail-block">
      <HeadingTitleMd>Seasons and Episodes</HeadingTitleMd>
      {
        seasonsData?.map((season)=>{
            return <SeasonItem key={season.id} seasonsData={season}/>
        })
      }
    </SeasonListWrapper>
  )
}

export default SeasonList;
