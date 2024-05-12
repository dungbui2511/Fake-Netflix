import { Container } from "../../../../styles/global/default"
import { SectionTitleWrapper } from "../../SectionTitle/SectionTitle.style"
import { GenreWrapper } from "./Genre.style"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GENRES } from "../../../../constant/mockData";
import GenreItem from "../GenreItem/GenreItem";
import { SliderWrapper } from "../../Slider/Slider.style";
import CustomNextArrow from "../../Slider/CustomNextArrow";
import CustomPrevArrow from "../../Slider/CustomPrevArrow";
import SectionTitle from "../../SectionTitle/SectionTitle";
const Genre = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        autoplaySpeed:6000,
        speed:300,
        sliderToShow:5,
        slidesToScroll:2,
        responsive:[
            {
                breakpoint:3600,
                settings:{
                    slidesToShow:4,
                }
            },
            {
                breakpoint:1200,
                settings:{
                    slidesToShow:4,
                }
            },
            {
                breakpoint:992,
                settings:{
                    slidesToShow:3,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:480,
                settings:{
                    settings:{
                        slidesToShowL:1
                    }
                }
            }
        ]
    };
  return (
    <GenreWrapper>
    <SectionTitle title={"Explore our wide variety of categories"} text={"Where you are looking for a comedy to make you laugh,a drama to make you documentary to learn something new"}/>
    <Container>
     <SliderWrapper>
     <Slider {...settings} nextArrow={<CustomNextArrow/>} prevArrow={<CustomPrevArrow/>}>
        {GENRES?.map((genre)=>(
            <GenreItem key={genre.id} data={genre}/>
        ))}
    </Slider>
     </SliderWrapper>
    </Container>
    </GenreWrapper>
  )
}

export default Genre
