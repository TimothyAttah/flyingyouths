import React from 'react';
import gsap from 'gsap';
import { Transition } from '../../components/PageTransition';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './ProgramsStyles'

const Programs = () => {
  const programs = gsap.timeline();
  return (
    <>
      <Transition timeline={programs} />
      <div>
        <Styles.ProgramsHeroContainer>
          <Styles.ProgramsHeroInfoContainer>
            <Styles.ProgramsInfoContainer>
              <h1>
                Launch your <br /> <span>Tech career</span> <br /> Today!
              </h1>
              <p>
                EarnBigFromTech School equips young people with the skills,
                resources and information that they need to launch, kickstart,
                grow a technology career within 90days or less. Over 70% of the
                program participants have landed internship, job placement,
                freelancing gigs, growth and income-earning opportunities 30days
                of completing the program. EarnBigFromTech School has proven to
                be the perfect platform for young people who want to transform
                their lives and careers.
              </p>
              <p>
                Enroll in one of our courses today and watch your life transform
                rapidly.
              </p>
              <button>Register today!</button>
            </Styles.ProgramsInfoContainer>
          </Styles.ProgramsHeroInfoContainer>
        </Styles.ProgramsHeroContainer>
        {/* <div>
          <h1>Programs</h1>
          <p>
            Programs specially curated to help you get started on your tech
            journey.
          </p>
        </div> */}

        <div>
          <h2>your career path begins here</h2>

          <div>
            <div>
              <span></span>
              <h4>Affordability</h4>
              <p>
                The average cost of learning a tech skills is N100,000-N500,000.
                You get it way less here.
              </p>
            </div>
            <div>
              <span></span>
              <h4>accredition</h4>
              <p>
                Our training programs certificates are widely accredited and we
                have students accross the globe
              </p>
            </div>
            <div>
              <span></span>
              <h4>opportunities</h4>
              <p>
                You will be exposed to a wide access of both local and
                international opportunities.
              </p>
            </div>
            <div>
              <span></span>
              <h4>track record</h4>
              <p>
                We've trained over 1000 people with a high record of over 70% of
                them succeeding in their trained skills.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <h4>our teaching strategy</h4>
              <p>
                EarnBigFromTech School is designed to emulate the work industry
                in terms of the pace, rate of rapid change, intensity, and
                continuous development and improvement and prepare all
                participants to follow this process.
              </p>
              <div>
                <div></div>
                <div>
                  <h4>live in-class training sessions</h4>
                  <p>
                    Class runs daily via instructor-led & very interactive
                    classes on a suitable web conferencing platform.
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <div></div>
              <div>
                <h4>project based training</h4>
                <p>
                  EarnBigFromTech School follow a very hands-on approach giving
                  you the platform to effectively hone your skills and become
                  industry-ready
                </p>
                <button>Get started</button>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div>
          <h2>programs</h2>
          <div>
            <div></div>
            <div>
              <h4>product design</h4>
              <p>
                Everything you need from learning how to design attractive UI
                and create great user experience
              </p>
              <button>Register</button>
            </div>
          </div>
          <div>
            <div>
              <h4>product management</h4>
              <p>
                Learn the fundamentals and key rudiments of product management,
                product life cycle and how it applies to building world class
                products.
              </p>
              <button>Register</button>
            </div>
            <div></div>
          </div>
        </div>

        <div>
          <h2>program details</h2>
          <div>
            <div>
              <div></div>
              <div>
                <h4>Fully physical and virtual</h4>
                <p>
                  The EarnBigFromTech School program is a physical and virtual
                  program like you've never seen before, it is fully immersive
                  and engaging.
                </p>
              </div>
            </div>
            <div>
              <div></div>
              <div>
                <h4>16 weeks</h4>
                <p>
                  The program runs for 16 weeks on alternating days to
                  accommodate sufficient time to practising and doing
                  assignments.
                </p>
              </div>
            </div>
            <div>
              <div></div>
              <div>
                <h4>Programs Options</h4>
                <p>
                  We provide options to pay in full and instalmentally and also
                  grant our participants access to our free virtual learning
                  academy.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h2>Payment & financial information</h2>
            <p>
              To confirm your place in an EarnBigFromTech School cohort, we must
              have received up to 50% of either your program tuition or a
              discounted amount.
            </p>
          </div>
          <div>
            <h4>Payment options</h4>
            <div>
              <div></div>
              <div>
                <h5>Enoch louis venture</h5>
                <p>0113544333</p>
                <small>Guaranty Trust Bank</small>
              </div>
            </div>
            <button>Pay with Paystack</button>
            <hr />
            <small>
              Note: Make sure to send a proof of payment to our team via
              enochlouis@gmail.com and we will reach out to you on payment
              status.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
