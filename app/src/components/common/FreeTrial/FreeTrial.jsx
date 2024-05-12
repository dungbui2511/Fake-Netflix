import { BaseLinkPrimary } from "../../../styles/components/Button"
import { Container, HeadingTitle, Paragraph } from "../../../styles/global/default"
import { FreeTrialWrapper } from "./FreeTrial.style"

const FreeTrial = () => {
  return (
    <FreeTrialWrapper className="section-py">
      <Container>
      <div className="free-trial-content bg-black06 flex items-center justify-between flex-wrap">
      <div>
      <HeadingTitle>Start your free trial day</HeadingTitle>
      <Paragraph>
      This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
      </Paragraph>
      </div>
      <BaseLinkPrimary>
      Start a Free Trial
      </BaseLinkPrimary>
      </div>
      </Container>
    </FreeTrialWrapper>
  )
}

export default FreeTrial
