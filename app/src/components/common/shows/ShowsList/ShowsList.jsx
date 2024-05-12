import { useState } from "react";
import { Container } from "../../../../styles/global/default"
import SectionTitle from "../../SectionTitle/SectionTitle"
import { PaginationWrapper, ShowsListWrapper } from "./ShowsList.style"
import PropTypes from 'prop-types';
import ShowsItem from "../ShowsItem/ShowsItem";
import { DEFAULT_SHOWS } from "../../../../constant/showsConstants";
import { Icons } from "../../../../assets/Icons";
const ShowsList = ({showsData,showsTitle}) => {
    const [currentPage,setCurrentPage] = useState(1);
    const showsPerPage = 40;
    const indexOfLastShow =  currentPage * showsPerPage;
    const indexOfFirstShow = indexOfLastShow - showsPerPage;
    const currentShows = showsData.slice(indexOfFirstShow,indexOfLastShow);
    const totalPages = Math.ceil(showsData.length / showsPerPage);
    console.log('total',totalPages);
    console.log('crs',currentShows);
    const handleNextPage = ()=>{
      if(currentPage < Math.ceil(showsData.length / showsPerPage)){
        setCurrentPage(currentPage +1);
      }
    };
    const handlePrevPage = ()=>{
      if(currentPage>1){
        setCurrentPage(currentPage-1);
      }
    }
    const handleNumpage = (pageNum)=>{
      if(pageNum){
        setCurrentPage(pageNum);
      }
    }
  return (
    <ShowsListWrapper>
    <SectionTitle title={showsTitle}/>
    <Container>
      <div className="shows-list grid">
      {
        currentShows?.map((show)=>(
            <ShowsItem key={show.id} itemData={show} itemType={DEFAULT_SHOWS}/>
        ))
      }
      </div>
      <PaginationWrapper className="flex items-center justify-center">
      <button onClick={handlePrevPage} type="button" className="paginate-btn paginate-prev inline-flex items-center justify-center disabled = {currentPage ===1 ? 'disabled' : ''}">
      <img src={Icons.ArrowLeft} alt=""/>
      </button>
      <ul className="flex items-center">
      {
        Array.from({length:totalPages},(_,index)=>{
          const tempPageNo = index +1;
          return (
            <li key={index}>
            <button onClick={()=>handleNumpage(tempPageNo)} type="button" className={`paginate-btn paginate-num text-white text-lg font-medium  ${tempPageNo === currentPage ? 'active' : ''}`}>
            {tempPageNo}
            </button>
            </li>
          )
        })
      }
      </ul>
      <button onClick={handleNextPage} type="button" className="paginate-btn paginate-next inline-flex items-center justify-center disabled = {currentPage === totalPages ? 'disabled' : ''}">
      <img src={Icons.ArrowRight} alt=""/>
      </button>
      </PaginationWrapper>
      </Container>
    </ShowsListWrapper>
  )
}

export default ShowsList
ShowsList.propTypes={
    showsData:PropTypes.array.isRequired,
    showsTitle:PropTypes.string.isRequired
}
