import css from './CardList.module.css';
import Card from '../Card/Card';

const CardList = () => {
  return (
    <ul className={css.cardList}>
      <Card />
      <Card />
    </ul>
  );
};

export default CardList;
