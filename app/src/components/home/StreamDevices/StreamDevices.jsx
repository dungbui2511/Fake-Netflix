import { StreamDevicesWrapper } from "./StreamDevices.style"
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { Container, HeadingTitleMd, Paragraph } from "../../../styles/global/default";
import {STREAM_DEVICES} from '../../../constant/mockData';
const StreamDevices = () => {
  return (
    <StreamDevicesWrapper className="section-py">
      <SectionTitle title={"We Provide you streaming experience across various devices."} text={"With StreamVibe,you can enjoy your favoritre movies and TV show anywhere.Our platform is designed to be compatiable with a wide ensuring that you never miss a moment of entertainment"}>
      </SectionTitle>
      <Container>
      <div className="stream-dev-content">
      <div className="stream-dev-list grid">
      {
        STREAM_DEVICES?.map((streamDevice)=>{
            return (
                <div className="stream-dev-item" key={streamDevice.id}>
                <div className="item-head flex items-center justify-start">
                <div className="item-icon bg-black12 flex items-center justify-center">
                    <div className="icon-wrapper flex items-center justify-center">
                    <img src={streamDevice.icon} alt=""/>
                    </div>
                </div>
                <HeadingTitleMd className="item-title">
                {streamDevice.device_name}
                </HeadingTitleMd>
                </div>
                <div className="item-body">
                <Paragraph>{streamDevice.description}</Paragraph>
                </div>
                </div>
            )
        })
      }
      </div>
      </div>
      </Container>
    </StreamDevicesWrapper>
  )
}

export default StreamDevices
