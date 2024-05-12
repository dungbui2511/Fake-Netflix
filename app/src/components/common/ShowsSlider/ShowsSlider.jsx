import Slider from "react-slick"
import { Container } from "../../../styles/global/default"
import SectionTitle from "../SectionTitle/SectionTitle"
import { SliderWrapper } from "../Slider/Slider.style"
import { ShowsSliderWrapper } from "./ShowsSlider.style"
import CustomNextArrow from "../Slider/CustomNextArrow"
import CustomPrevArrow from "../Slider/CustomPrevArrow"
import PropTypes from 'prop-types';
import ShowsItem from "../shows/ShowsItem/ShowsItem"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ShowsSlider = ({sliderType,sliderTitle,showsData}) => {
    const settings ={
        dots:true,
        infinite:true,
        autoplay:true,
        autoplaySpeed:6000,
        speed:300,
        slidesToShow:5,
        slidesToScroll:2,
        responsive:[
            {
                breakpoint:1440,
                settings:{
                    slidesToShow:4,
                }
            },
            {
                breakpoint:1200,
                settings:{
                    slidesToShow:3,
                }
            },
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                }
            },
            
        ]
    }
  return (
    <ShowsSliderWrapper>
      <SectionTitle title={sliderTitle}/>
      <Container>
      <SliderWrapper className="slider-wrapper">
      <Slider {...settings} nextArrow={<CustomNextArrow/>} prevArrow={<CustomPrevArrow/>}>
      {
        showsData?.slice(0,12)?.map((show)=>{
            return(
                <ShowsItem key={show.id} itemData={show} itemType={sliderType}/>
            )
        })
      }
      </Slider>
      </SliderWrapper>
      </Container>
    </ShowsSliderWrapper>
  )
}

export default ShowsSlider;
ShowsSlider.propTypes ={
    showsData:PropTypes.array,
    sliderType:PropTypes.string,
    sliderTitle:PropTypes.string
}
