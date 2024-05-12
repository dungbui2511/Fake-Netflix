import ShowsList from "../../common/shows/ShowsList/ShowsList";
import PropTypes from "prop-types";
import { SearchBarWrapper } from "../SearchBar/SearchBar.style";

const SearchList = ({ searchResultsData }) => {
  const showsData = searchResultsData.map((singleResult) => singleResult.show);
  return (
    <SearchBarWrapper>
      <ShowsList showsData={showsData} showsTitle={"Search Results"} />
    </SearchBarWrapper>
  );
};

export default SearchList;

SearchList.propTypes = {
  searchResultsData: PropTypes.array.isRequired,
};