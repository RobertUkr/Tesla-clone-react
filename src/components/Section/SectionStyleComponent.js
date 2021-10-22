import styled from "styled-components";
import { keyframes } from "styled-components";

const animateDown = keyframes`

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }
    40%{
        transform: translateY(5%); 
    }
    60%{
        transform: translateY(3%);  
    }
`;

export const SectionWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: -1;
  position: relative;
`;

export const SectionItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

export const TitleSection = styled.h1``;

export const TextSection = styled.p``;

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LeftButton = styled.button`
  border: none;
  background-color: rgba(23, 26, 32, 0.8);
  width: 100%;
  width: 256px;
  height: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
`;
export const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: rgba(23, 26, 32, 0.8);
  opacity: 0.65;
`;

export const DownArrow = styled.img`
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
  cursor: pointer;
  overflow-x: hidden;
  animation-name: ${animateDown};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;
export const Buttons = styled.div``;
