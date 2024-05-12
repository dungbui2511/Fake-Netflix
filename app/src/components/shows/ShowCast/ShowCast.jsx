import { ShowCastWrapper } from "./ShowCast.style"
import Slider from 'react-slick';
import { useSelector } from "react-redux";
import { selectShowCast } from "../../../redux/selectors/showsSelectors";
import CustomNextArrow from '../../common/Slider/CustomNextArrow';
import CustomPrevArrow from '../../common/Slider/CustomPrevArrow';
import { SliderWrapper } from "../../common/Slider/Slider.style";
const ShowCast = () => {
    const castData = useSelector(selectShowCast);
    const settings ={
        dots:false,
        infinite:true,
        speed:300,
        autoplay:true,
        autoplaySpeed:6000,
        slidesToShow:1,
        centerMode:true,
        variableWidth:true,
        slidesToScroll:1
    }
  return (
    <ShowCastWrapper className="detail-block show-cast">
        <h4 className="detail-block title">Cast</h4>
        <SliderWrapper>
        {
            castData && (
                <Slider {...settings} nextArrow={<CustomNextArrow/>} prevArrow={<CustomPrevArrow/>}>
                {
                    castData?.map((cast)=>{
                        return(
                            <div className="show-cast-item" key={cast?.person?.id}>
                            <div className="item-content">
                            <img src={cast?.person?.image.medium} alt="" className="object-fit-cover"/>
                            </div>
                            </div>
                        )
                    })
                }
                </Slider>
            )
        }
        </SliderWrapper>
    </ShowCastWrapper>
  )
}

export default ShowCast;
