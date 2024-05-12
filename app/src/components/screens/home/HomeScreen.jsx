import { useEffect } from "react"
import { scrollToTop } from "../../../utilities/scrollToTop"
import Banner from "../../home/Banner/Banner";
import Genre from "../../common/genre/Genre/Genre";
import StreamDevices from "../../home/StreamDevices/StreamDevices";
import CommonQuestions from "../../home/CommonQuestions/CommonQuestions";
import Subscription from "../../home/Subscription/Subscription";
import FreeTrial from "../../common/FreeTrial/FreeTrial";
const HomeScreen = () => { 
  useEffect(()=>scrollToTop(),[]);
  return (
    <div className="pg-home">
      <Banner/>
      <Genre/>
      <StreamDevices/>
      <CommonQuestions/>
      <Subscription/>
      <FreeTrial/>
    </div>
  )
}

export default HomeScreen
