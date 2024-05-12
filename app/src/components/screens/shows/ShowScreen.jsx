import { useDispatch, useSelector } from "react-redux"
import Spinner from "../../common/Spinner/Spinner";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import { useEffect } from "react";
import { fetchAllShows } from "../../../redux/slices/showsSlice";
import { selectAllShows, selectorSortedHighRatedShows, selectorSortedNewShows } from "../../../redux/selectors/showsSelectors";
import { scrollToTop } from "../../../utilities/scrollToTop";
import ShowsList from "../../common/shows/ShowsList/ShowsList";
import ShowsBanner from "../../common/shows/ShowsBanner/ShowsBanner";
import ShowsSlider from "../../common/ShowsSlider/ShowsSlider";
import { HIGH_RATED_SHOWS, NEW_SHOWS } from "../../../constant/showsConstants";
import FreeTrial from "../../common/FreeTrial/FreeTrial";
const ShowScreen = () => {
  const isLoading = useSelector((state)=>state.shows.isLoading.fetchAllShows);
  const isError = useSelector((state)=>state.shows.isError.fetchAllShows);
  const error = useSelector((state)=>state.shows.error);
  const dispatch = useDispatch();
  const allShowsData = useSelector(selectAllShows);
  const highRatedShowsData = useSelector(selectorSortedHighRatedShows);
  const latestPremieredShowsData = useSelector(selectorSortedNewShows);
  console.log('hrs',highRatedShowsData);
  useEffect(()=>{
    dispatch(fetchAllShows());
   },[dispatch]);
  console.log(allShowsData);
  useEffect(()=>scrollToTop(),[]);
  if(isLoading){
    return <Spinner/>;
  }
  if(isError){
    return <ErrorMessage/>;
  }
  return (
    <div className="pg-shows">
    {
      highRatedShowsData?.length >0 &&(
        <ShowsBanner showData={highRatedShowsData[Math.floor(Math.random() * 10)]}/>
      )
    }
    {
      highRatedShowsData?.length > 0 && (
        <ShowsSlider sliderType={HIGH_RATED_SHOWS} sliderTitle={"All Time Popular Shows"} showsData={highRatedShowsData}/>
      )
    }
    {
      latestPremieredShowsData?.length > 0 && (
        <ShowsSlider sliderType={NEW_SHOWS} sliderTitle={"All New Shows"} showsData={latestPremieredShowsData}/>
      )
    }
    {allShowsData?.length > 0 && (
      <ShowsList showsData={allShowsData} showsTitle={"All Shows"} />
    )}
    <FreeTrial/>
    </div>
  );
};

export default ShowScreen;
