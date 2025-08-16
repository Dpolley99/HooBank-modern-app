import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} flex-col`}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor. 
          Aliquet ultrices ac, ametau.
          </p>

        <button type='button' className={`px-6 py-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] mt-10`}>
          Get Started
        </button>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        <img src={card} alt="card" className='w-[100%] h-[100%] relative z-[5]' />
      </div>
    </section>
  )

export default CardDeal