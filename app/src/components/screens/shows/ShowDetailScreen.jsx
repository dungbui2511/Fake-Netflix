import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectShowDetail } from "../../../redux/selectors/showsSelectors";
import { useEffect } from "react";
import { fetchSingleShow } from "../../../redux/slices/showsSlice";
import {scrollToTop} from '../../../utilities/scrollToTop';
import ShowsBanner from "../../common/shows/ShowsBanner/ShowsBanner";
import Spinner from "../../common/Spinner/Spinner";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import { Container } from "../../../styles/global/default";
import { ShowDetailContent } from "./ShowDetailScreen.style";
import { ShowMainData, ShowMetaData } from "../..";
import SeasonItem from "../../shows/SeasonItem/SeasonItem";
const ShowDetailScreen = () => {
  const {id:showId} = useParams();
  const dispatch = useDispatch();
  const showDetailData = useSelector(selectShowDetail);
  const isLoading = useSelector((state)=>state.shows.isLoading.fetchSingleShow);
  const isError = useSelector((state)=>state.shows.isError.fetchSingleShow);
  const error = useSelector((state)=>state.shows.error);
  const showMetaData =  useSelector(selectShowDetail);
  console.log(showMetaData);
  console.log(showDetailData);
  useEffect(()=>scrollToTop(),[]);
  useEffect(()=>{
    dispatch(fetchSingleShow(showId));
  },[dispatch,showId]);
  if(isLoading){
    return <Spinner/>
  }
  if(isError){
    return <ErrorMessage error={error}/>
  }
  return (
    <div className="pg-show-detail">
      {showDetailData && <ShowsBanner showData = {showDetailData}/>}
      <Container>
      {
        showDetailData && (
          <ShowDetailContent>
          <ShowMainData/>
          <ShowMetaData metaData={showMetaData}/>
          </ShowDetailContent>
        )
      }
      </Container>
      </div>
  )
}

export default ShowDetailScreen
