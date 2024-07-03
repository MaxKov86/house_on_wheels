// import Button from '../Button/Button';
import BtnShowModal from '../Button/BtnShowModal';
import CardHeader from '../CardHeader/CardHeader';
import css from './Card.module.css';

const Card = () => {
  return (
    <li className={css.cardItem}>
      <img className={css.cardImg} src="" alt="" />
      <div className={css.cardInfo}>
        <CardHeader />
        <p className={css.supportingText}>
          lorem sdh ksjdhqkjdh sdjhjhdfs sdsuhdd ss
        </p>
        <ul className={css.segmentedPicker}></ul>
        <BtnShowModal>Show more</BtnShowModal>
      </div>
    </li>
  );
};

export default Card;
