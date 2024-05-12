import { useSelector } from "react-redux";
import { Icons } from "../../../assets/Icons";
import { ShowMetaDataWrapper } from "./ShowMetaData.style";
import { selectShowMetadata } from "../../../redux/selectors/showsSelectors";
import { Paragraph } from "../../../styles/global/default";
const ShowMetaData = () => {
  const metaData = useSelector(selectShowMetadata);
  console.log(metaData);
  return (
    <ShowMetaDataWrapper>
      <div className="detail-block">
      <div className="detail-block-item">
      <Paragraph className="block-item-title flex items-center justify-start">
        <span className="title-icon">
        <img src={Icons.CalendarGrey} alt=""/>
        </span>
        <span className="title-text">Released Date</span>
      </Paragraph>
      <div className="block-item-body">
      <div className="block-item-pill text-md">
      {metaData?.premiered}
      </div>
      </div>
      </div>
      <div className="detail-block-item">
      <Paragraph className="block-item-title flex items-center justify-start">
      <span className="title-icon">
      <img src={Icons.CalendarGrey} alt=""/>
      </span>
      <span className="title-text">Available Language</span>
    </Paragraph>
      </div>
      </div>
    </ShowMetaDataWrapper>
  )
}

export default ShowMetaData
