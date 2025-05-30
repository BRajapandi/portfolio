import Wrapped from './HomeStyle';
import { FaReact, FaNodeJs } from 'react-icons/fa6'; //FaHtml5, FaGithub
import { SiMongodb } from 'react-icons/si';
import mine from '../../asserts/mine/profile.png';
import ScondRow from './ScondRow';
import ThirdRow from './ThirdRow';
import { useEffect } from 'react';
import Index from './Background.js';
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapped>
      <Index />
      <div className='firstRow'>
        <div className='firstCol'>
          <div className='ColWrapper'>
            <div className='hello'>
              <div data-aos='fade-up'>
                Hello, <span>I'm</span>
              </div>
            </div>
            <div className='protest-revolution-regular name'>
              <div
                data-aos='fade-down'
                style={{ paddingBottom: '10px' }}
                data-aos-delay='400'
              >
                RAJAPANDI
              </div>
            </div>
            <div className='profileSub'>
              <div data-aos='fade-zoom-in' data-aos-delay='600'>
                A <span>web</span> Developer From Madurai
              </div>
            </div>
            <div
              className='profileSubContent'
              data-aos='fade-zoom-in'
              data-aos-delay='800'
            >
              I'm creative web Developer based in Madurai, and I'm very
              passionate and dedicated to my work
            </div>
            <div
              className='abtBtnWrapper'
              data-aos='fade-zoom-in'
              data-aos-delay='800'
            >
              <button>About Me</button>
            </div>
          </div>
        </div>
        <div className='secondCol'>
          <div className='profileTechWrapper'>
            <span className='techIcon'>
              <FaReact />
            </span>
            <span className='techIcon'>
              <FaNodeJs />
            </span>
            <span className='techIcon'>
              <SiMongodb />
            </span>
          </div>
          <div className='profileBg'></div>
          <div className='profileWrapper'>
            <img
              className='profile'
              src={mine}
              alt='Rajapandi Profile Resume'
            />
          </div>
        </div>
      </div>
      <ScondRow />
      <br />
      <ThirdRow />
    </Wrapped>
  );
}
export default Home;
