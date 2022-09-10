import * as React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import campfire from '../images/campfire.svg';

const intro = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 30vh;
  }
`;

const introImg = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 20vh;
  }
`;

const StyledBorder = styled.div`
  height: 0;
  width: 80vw;
  border-top: solid white 2px;
  border-bottom: solid white 2px;
  animation: 0.8s normal forwards 1s 1 ${intro} ease-in-out;
  overflow: hidden;
`;

const Img = styled.img`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 20vh;
  margin: 10px;
  ${'' /* animation: 0.6s normal forwards 1.4s 1 ${introImg} ease-in-out; */}
`;

const Border = () => {
  return (
    <StyledBorder>
      <Img src={campfire} />
    </StyledBorder>
  );
};

export default Border;
