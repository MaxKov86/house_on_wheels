// import Layout from '../../components/Layout/Layout';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.home}>
      <p className={css.text}>
        Looking for a Class C RV rental for your next road trip? Our Class C RV
        models provide plenty of space and comfort in every setup so you can
        camp closer to nature with the comforts of home!{' '}
      </p>
      <img
        className={css.img}
        src="/hanson-lu--Avc2AiE1_Q-unsplash.jpg"
        alt="photo"
      />
    </div>
  );
};

export default HomePage;
