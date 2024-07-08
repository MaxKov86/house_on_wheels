// import Layout from '../../components/Layout/Layout';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.home}>
      <img
        className={css.img}
        src="/hanson-lu--Avc2AiE1_Q-unsplash.jpg"
        alt="photo"
      />
    </div>
  );
};

export default HomePage;
