import { useState } from "react"
import { FAQS } from "../../../constant/mockData"
import { Container, Paragraph } from "../../../styles/global/default"
import SectionTitle from "../../common/SectionTitle/SectionTitle"
import { CommonQItemWrapper, CommonQWrapper } from "./CommonQuestions.style"
import { Icons } from "../../../assets/Icons"
import PropTypes from "prop-types";

const CommonQuestions = () => {
    let halfValue = Math.ceil(FAQS.length / 2);
  return (
    <CommonQWrapper className="section-py">
      <SectionTitle title={"Frequently Asked Questions"} text={"Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."} rightContentType={"title-button"}/>
      <Container>
      <div className="common-q-content">
      <div className="common-q-list grid">
      <div className="q-list-none">
        {
            FAQS?.slice(0,halfValue)?.map((faq,index)=>{
                let tempIndex =index +1;
                return(
                    <CommonQuestionsItem data={faq} key={faq.id} count={tempIndex}/>
                )
            })
        }
      </div>
      <div className="q-list-two">
      {
          FAQS?.slice(halfValue)?.map((faq,index)=>{
              let tempIndex =  halfValue+(index +1);
              return(
                  <CommonQuestionsItem data={faq} key={faq.id} count={tempIndex}/>
              )
          })
      }
    </div>
      </div>
      </div>
      </Container>
    </CommonQWrapper>
  )
}

export default CommonQuestions;
const CommonQuestionsItem = ({data,count})=>{
    const tempIndex = count < 10 ? `0${count}` : count;
    const [isCollapsed,setIsCollapsed] = useState(true);
    const handleAccordion = ()=>{
      setIsCollapsed(!isCollapsed);
    }
    console.log(isCollapsed)
    return(
      <CommonQItemWrapper className="item">
       <div className="item-grid grid">
       <div className="item-sn bg-black12 text-white flex items-center justify-center text-xl font-semibold">
       {tempIndex}
       </div>
       <div className="item-body">
       <div className="item-head flex justify-between items-start" onClick={handleAccordion}>
       <h4 className="item-title text-xl">{data.question}</h4>
       <button className="item-btn bg-transparent">{isCollapsed ? (<img src={Icons.Plus}/>) : (<img src={Icons.Minus}/>)}</button>
       </div>
       <div className={`item-text ${!isCollapsed ? "show" : ""}`}>
       <Paragraph>{data.answer}</Paragraph>
       </div>
       </div>
       </div>
      </CommonQItemWrapper>
    )
}
CommonQuestionsItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  count: PropTypes.number.isRequired,
};

