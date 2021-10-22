import Fade from "react-reveal/Fade";
import {
  SectionWrap,
  SectionItemText,
  TextSection,
  TitleSection,
  ButtonGroup,
  LeftButton,
  RightButton,
  DownArrow,
  Buttons,
} from "./SectionStyleComponent";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <SectionWrap bgImage={backgroundImg}>
      <Fade bottom>
        <SectionItemText>
          <TitleSection>{title}</TitleSection>
          <TextSection>{description}</TextSection>
        </SectionItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </SectionWrap>
  );
};

export default Section;
