import { useEffect } from "react"
import { scrollToTop } from "../../../utilities/scrollToTop"
import SearchBar from "../../search/SearchBar/SearchBar";

const SearchScreen = () => {
  useEffect(()=>scrollToTop(),[]);
  return (
    <div className="pg-search top-spacing fix">
      <SearchBar/>
    </div>
  )
}
export default SearchScreen
