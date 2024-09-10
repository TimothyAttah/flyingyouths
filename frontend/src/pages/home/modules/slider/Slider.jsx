import React from 'react';
import * as Styles from './SliderStyles';
import pix1 from '../../../../assets/team1.png';
import pix2 from '../../../../assets/team2.png';
import pix3 from '../../../../assets/team3.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';

const Slider = () => {
  useEffect(() => {
    const slides = document.querySelector('.slider').children;
    console.log(slides);
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    next.addEventListener('click', function () {
      nextSlide();
      resetTimer()
    });

    prev.addEventListener('click', function () {
      prevSlide();
      resetTimer()
    });

    function changeSlide() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active'); // STEP TWO
      }
      slides[index].classList.add('active'); // STEP ONE
    }

    function nextSlide() {
      if (index === slides.length - 1) {
        index = 0;
      } else {
        index++;
      }
      changeSlide();
    }

    function prevSlide() {
      if (index === 0) {
        index = slides.length - 1;
      } else {
        index--;
      }

      //CALL CHANGE SLIDE FUNCTION
      changeSlide();
    }

    //Timer
    function resetTimer() {
      //When click the controls stop the timer
      clearInterval(timer);

      //Then start the timer again
      timer = setInterval(autoPlay, 6000);
    }

    function autoPlay() {
      nextSlide();
    }

    let timer = setInterval(autoPlay, 6000);
  }, []);


  return (
    <>
      <Styles.SliderContainer>
        <Styles.SliderCardContainer className='slider'>
          <Styles.SliderCard className='slide active'>
            <Styles.SliderCardImgContainer>
              <img src={pix1} alt='' />
            </Styles.SliderCardImgContainer>
            <Styles.SliderCardInfoContainer>
              <p>
                "EBT coding bootcamp is more than just a learning experience-
                It's a transformative journey into the world of technology. They
                pride us on offering an immersive, hands-on curriculum that
                equips our students with skills needed to excel in tech
                industry.
              </p>
            </Styles.SliderCardInfoContainer>
          </Styles.SliderCard>
          <Styles.SliderCard className='slide'>
            <Styles.SliderCardImgContainer>
              <img src={pix2} alt='' />
            </Styles.SliderCardImgContainer>
            <Styles.SliderCardInfoContainer>
              <p>
                "EBT coding bootcamp is more than just a learning experience-
                It's a transformative journey into the world of technology. They
                pride us on offering an immersive, hands-on curriculum that
                equips our students with skills needed to excel in tech
                industry.
              </p>
            </Styles.SliderCardInfoContainer>
          </Styles.SliderCard>
          <Styles.SliderCard className='slide'>
            <Styles.SliderCardImgContainer>
              <img src={pix3} alt='' />
            </Styles.SliderCardImgContainer>
            <Styles.SliderCardInfoContainer>
              <p>
                "EBT coding bootcamp is more than just a learning experience-
                It's a transformative journey into the world of technology. They
                pride us on offering an immersive, hands-on curriculum that
                equips our students with skills needed to excel in tech
                industry.
              </p>
            </Styles.SliderCardInfoContainer>
          </Styles.SliderCard>
        </Styles.SliderCardContainer>
        <div className='controls'>
          <div className='prev'>
            <FaArrowLeft />
          </div>
          <div className='next'>
            <FaArrowRight />
          </div>
        </div>
      </Styles.SliderContainer>
    </>
  );
};

export default Slider;
