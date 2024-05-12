import { useRef, useState } from "react"
import { Images } from "../../../assets/images"
import { SearchBarWrapper } from "./SearchBar.style"
import { Icons } from "../../../assets/Icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../../../redux/slices/showsSlice";
import { selectSearchResults } from "../../../redux/selectors/showsSelectors";
import SearchList from "../SearchList/SearchList";
import NotDataFound from "../../common/NoDataFound/NoDataFound";

const SearchBar = () => {
    const [query,setQuery] = useState("");
    const dispatch = useDispatch();
    const [searchError,setSearchError] = useState("");
    const [hasValidQuery,setHasValidQuery] = useState(false);
    const inputRef = useRef("");
    const searchResultData = useSelector(selectSearchResults);
    console.log(searchResultData);
    const isValidSearchQuery = (query)=>{
      const regex = /^[\w\s\-',.?!&]+$/i;
      return regex.test(query);
    }
    const handleQuerySubmit = async (event) => {
      event.preventDefault();
      if (isValidSearchQuery(query)) {
        await dispatch(fetchSearchResults(query));
        setHasValidQuery(true);
        setSearchError("");
      } else if (query.trim().length === 0) {
        setSearchError("Please enter shows name.");
        setHasValidQuery(false);
      } else {
        setSearchError("Please enter valid show title or name.");
        setHasValidQuery(false);
      }
    };
    const handleQueryChange = (event) => setQuery(event.target.value);
  return (
    <SearchBarWrapper>
      <div className="searchbar-top flex items-center justify-center">
      <img src={Images.HomeBanner} alt="" className="obj-fit-cover searchbar-banner"/>
      <form onSubmit={handleQuerySubmit}>
      <div className="search-box flex">
      <div className="search-input">
      <input type="text" placeholder="Search for TV shows..." className="text-lg font-semibold" onChange={handleQueryChange} ref={inputRef}/>
      </div>
      <button type="submit" className="search-icon bg-transparent">
      <img src={Icons.Search} alt=""/>
      </button>
      <span className="search-error-text">{searchError}</span>
      </div>
      </form>
      </div>
      <div className="searchbar-bottom">
      {hasValidQuery &&
        (searchResultData && searchResultData.length > 0 ? (
          <SearchList searchResultsData={searchResultData} />
        ) : (
          <NotDataFound />
        ))}
      </div>
    </SearchBarWrapper>
  )
}

export default SearchBar
