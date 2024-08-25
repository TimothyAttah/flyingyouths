import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Power4 } from 'gsap';

export const TransitionEffect = styled.div`
  position: fixed;
  z-index: 1000000000000;
  background-color: #474242;
  /* background-image: repeating-linear-gradient(
      to right,
      #2d2a44 0 1px,
      transparent 2px 200px
    ),
    repeating-linear-gradient(to left, #2d2a44 0 1px, transparent 2px 200px),
    radial-gradient(at 50% 50%, #2d2a44, #1d1b34);
  --to: top;
  background-image: linear-gradient(to var(--to), #89a5df, #e46e7f, #e8e191); */
  top: 0;
  width: 100%;
  height: 100vh;
`;

export const Transition = ({ timeline }) => {
  const trans = useRef(null);

  useEffect(() => {
    timeline.to(trans.current, {
      duration: 5,
      x: -3000,
      ease: Power4.easeOut,
    });

    // timeline.from(trans.current, {
    //   duration: 5,
    //   x: 2600,
    //   ease: Power3.easeOut,
    // });
  }, [timeline]);
  return (
    <>
      <TransitionEffect ref={trans}></TransitionEffect>
    </>
  );
};
