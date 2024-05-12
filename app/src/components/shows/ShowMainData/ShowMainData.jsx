import { useSelector } from "react-redux"
import { Paragraph } from "../../../styles/global/default"
import { ShowMainDataWrapper } from "./ShowMainData.style"
import { selectShowDescription, selectShowMetadata } from "../../../redux/selectors/showsSelectors"
import SeasonList from "../SeasonList/SeasonList"
import ShowCast from "../ShowCast/ShowCast"

const ShowMainData = () => {
    const descriptionData = useSelector(selectShowDescription);
    const showMetaData = useSelector(selectShowMetadata);
    console.log(showMetaData);
  return (
    <ShowMainDataWrapper>
    <SeasonList/>
      <div className="detail-block show-description">
      <h4 className="detail-block-title">Descriprion</h4>
      <Paragraph className="text-white" dangerouslySetInnerHTML={{
        __html: descriptionData,
      }}>
      </Paragraph>
      </div>
      <ShowCast/>
    </ShowMainDataWrapper>
  )
}
export default ShowMainData
