import React from 'react';
import { RiPushpin2Fill } from 'react-icons/ri';
import gsap from 'gsap';
import * as Styles from './FeesStyles';
import { Transition } from '../../components/PageTransition';

const Fees = () => {
    const fees = gsap.timeline();
  return (
    <>
      <Transition timeline={fees} />
      <Styles.TuitionAndFeesContainer>
        <Styles.TuitionAndFeesTitle>
          <RiPushpin2Fill />
          <h2>Tuition and fees</h2>
        </Styles.TuitionAndFeesTitle>
        <div>
          <div>
            <Styles.TuitionAndFeesTable>
              <thead>
                <tr>
                  <th>programs</th>
                  <th>tuition fee</th>
                  <th>payment options</th>
                  <th>durations</th>
                </tr>
              </thead>
              <tbody>
                <tr className='table-row'>
                  <td>
                    <h3>program</h3>frontend
                  </td>

                  <td>
                    <h3>tuition fee</h3>₦150,000
                  </td>
                  <td>
                    <h3>payment options</h3>
                    <h4>Payable in two installments.</h4>
                    <p>First session (60%) = ₦100,000</p>
                    <p>Second session (40%) = ₦50,000</p>
                  </td>
                  <td>
                    <h3>durations</h3>2 months
                  </td>
                </tr>
                <tr className='table-row'>
                  <td>
                    <h3>program</h3>backend
                  </td>

                  <td>
                    <h3>tuition fee</h3>₦150,000
                  </td>
                  <td>
                    <h3>payment options</h3>
                    <h4>Payable in two installments.</h4>
                    <p>First session (60%) = ₦100,000</p>
                    <p>Second session (40%) = ₦50,000</p>
                  </td>
                  <td>
                    <h3>durations</h3>2 months
                  </td>
                </tr>
                <tr className='table-row'>
                  <td>
                    <h3>program</h3>fullstack
                  </td>

                  <td>
                    <h3>tuition fee</h3>₦300,000
                  </td>
                  <td>
                    <h3>payment options</h3>
                    <h4>Payable in two installments.</h4>
                    <p>First session (50%) = ₦150,000</p>
                    <p>Second session (50%) = ₦150,000</p>
                  </td>
                  <td>
                    <h3>durations</h3>4 months
                  </td>
                </tr>
                <tr className='table-row'>
                  <td>
                    <h3>program</h3>microsoft word and excel
                  </td>

                  <td>
                    <h3>tuition fee</h3>₦30,000
                  </td>

                  <td>
                    <h3>payment options</h3>No installments payment
                  </td>
                  <td>
                    <h3>durations</h3>2 months
                  </td>
                </tr>
                <tr className='table-row'>
                  <td>
                    <h3>program</h3>robotics
                  </td>

                  <td>
                    <h3>tuition fee</h3>₦25,000
                  </td>

                  <td>
                    <h3>payment options</h3>No installments payment
                  </td>
                  <td>
                    <h3>durations</h3>2 months
                  </td>
                </tr>
              </tbody>
            </Styles.TuitionAndFeesTable>
          </div>
        </div>
      </Styles.TuitionAndFeesContainer>
    </>
  );
};

export default Fees;
