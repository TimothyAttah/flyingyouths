import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SliderContainer = styled(motion.div)`
  /* border: 2px solid red; */
  /* margin: 0 30%; */
  position: relative;
  height: 70vh;
  overflow: hidden;

  .controls .prev,
  .controls .next {
    position: absolute;
    z-index: 2;
    top: 50%;
    height: 40px;
    width: 40px;
    margin-top: -20px;
    color: #fff;
    background-color: #ff5722;
    /* display: flex;
  align-items: center;
  justify-content: center; */
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .controls .prev:hover,
  .controls .next:hover {
    background-color: #000;
  }

 .controls .prev {
    left: 0;
  }

 .controls .next {
    right: 0;
  }
`;
export const SliderCardContainer = styled(motion.div)`
  /* border: 2px solid red; */

  .active {
    display:block;
  }
`;
export const SliderCard = styled(motion.div)`
  /* width: 300px; */

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  display: none;
  padding: 0 15px;
  animation: slide 2s ease;

  @keyframes slide {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;



export const SliderCardImgContainer = styled(motion.div)`
  width:200px;
  img {
    width: 100%;
  }
`;
export const SliderCardInfoContainer = styled(motion.div)``;


export const SliderCarousel = styled(motion.div)`
  cursor:grab;
  overflow: hidden;
  background: pink;
`;

export const SliderInnerCarousel = styled(motion.div)`
  display: flex;
  background:lightblue;
  gap: 20px;
`;
export const SliderItem = styled(motion.div)``;

// export const SliderContainer = styled.div``;
// export const SliderContainer = styled.div``;
// export const SliderContainer = styled.div``;
