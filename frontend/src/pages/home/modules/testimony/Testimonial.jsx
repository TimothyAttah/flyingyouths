import React from 'react';
import * as Styles from './TestimonialStyles';
import quote from '../../../../assets/testIcon.png';
import { testimonyReviewData } from './testimonialData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Testimonial = () => {
  return (
    <Styles.TestimonialMainContainer>
      <Styles.TestimonialContainer>
        <Styles.TestimonialTitle>
          <h1>Testimonial</h1>
          <p>Hear what our students says </p>
        </Styles.TestimonialTitle>
        <Styles.TestimonialSliderContainer>
          <Styles.Quote>
            <img src={quote} alt='' className='top-quote' />
            <img src={quote} alt='' className='bottom-quote' />
          </Styles.Quote>

          <Splide
            options={{ perPage: 1, type: 'loop', speed: 2000, autoplay: true }}
          >
            {testimonyReviewData.map((review) => (
              <SplideSlide key={review.testimonialId}>
                <Styles.TestimonialReviewImg
                  src={review.testimonialImage}
                  alt=''
                />

                <Styles.TestimonialReviewContent>
                  <Styles.TestimonialReviewText>
                    {review.testimonialText}
                  </Styles.TestimonialReviewText>
                  <Styles.TestimonialReviewInfo>
                    <Styles.TestimonialReviewRating>
                      <Styles.TestimonialReviewRatingStar>
                        &#9733;
                      </Styles.TestimonialReviewRatingStar>
                      <Styles.TestimonialReviewRatingStar>
                        &#9733;
                      </Styles.TestimonialReviewRatingStar>
                      <Styles.TestimonialReviewRatingStar>
                        &#9733;
                      </Styles.TestimonialReviewRatingStar>
                      <Styles.TestimonialReviewRatingStar>
                        &#9733;
                      </Styles.TestimonialReviewRatingStar>
                      <Styles.TestimonialReviewRatingStar>
                        &#9733;
                      </Styles.TestimonialReviewRatingStar>
                    </Styles.TestimonialReviewRating>
                    <Styles.TestimonialReviewUser>
                      {review.testimonialName}
                    </Styles.TestimonialReviewUser>
                  </Styles.TestimonialReviewInfo>
                </Styles.TestimonialReviewContent>
              </SplideSlide>
            ))}
          </Splide>
        </Styles.TestimonialSliderContainer>
      </Styles.TestimonialContainer>
    </Styles.TestimonialMainContainer>
  );
};

export default Testimonial;
