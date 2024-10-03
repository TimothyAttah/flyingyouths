import styled, { css } from 'styled-components';

export const TestimonialMainContainer = styled.div`
  max-width: 800px;
  width: 100%;
  /* font-family: 'Merriweather', serif; */
  font-family: 'Lato', sans-serif;
  background-color: #f6f6f6;
  margin-inline: auto;
  padding: 20px;
  /* height: 100vh; */

  @media screen and (max-width: 576px) {
    /* height: 50vh; */
  }
`;

export const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    max-width: 100%;
    display: block;
  }

  .splide__track {
    border-radius: 1rem;
  }

  .splide__slide {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 3rem 1.875rem;
    border-radius: 1rem;
    gap: 1rem;
  }

  .splide__arrow {
    position: absolute;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    color: #505050;
    font-weight: 300;
    /* z-index: 1; */
  }

  .splide__arrow--prev {
    left: -3.5rem;
  }

  .splide__arrow--next {
    right: -3.5rem;
  }

  .splide__pagination__page {
    width: 10px;
    height: 10px;
    opacity: 1;
  }

  .splide__pagination__page.is-active {
    background-color: #ff6f59;
  }

  @media screen and (max-width: 576px) {
    .splide__slide {
      display: block;
      text-align: center;
    }

    .splide__arrow {
      font-size: 1.5rem;
    }

    .splide__arrow--prev {
      left: 0.5rem;
    }

    .splide__arrow--next {
      right: 0.5rem;
    }
  }
`;
export const TestimonialTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
  }
`;
export const TestimonialSliderContainer = styled.div`
  position: relative;
  user-select: none;
  padding-inline: 1rem;
`;
export const Quote = styled.blockquote`
  img {
    position: absolute;
    /* z-index: -1; */
    width: 90px;
  }

  .top-quote {
    position: absolute;
    top: -1rem;
    left: -1rem;
  }

  .bottom-quote {
    position: absolute;
    bottom: -3rem;
    right: -0.5rem;
    transform: rotate(180deg);
  }

  @media screen and (max-width: 576px) {
    .bottom-quote {

      right: 0;
    }
  }
`;

export const TestimonialReviewImg = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #f6f6f6;

  @media screen and (max-width: 576px) {
   margin-inline: auto;
  }
`;
export const TestimonialReviewContent = styled.div``;
export const TestimonialReviewText = styled.p`
  color: #484646;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`;
export const TestimonialReviewInfo = styled.div``;
export const TestimonialReviewRating = styled.div`
  display: inline-block;
  line-height: 1;
`;
export const TestimonialReviewRatingStar = styled.span`
  color: #ff6f59;
  font-size: 1.1rem;
`;
export const TestimonialReviewUser = styled.p`
  font-weight: 600;
`;

// export const TestimonialContainer = styled.div``;
// export const TestimonialContainer = styled.div``;
