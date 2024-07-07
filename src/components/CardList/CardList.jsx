import css from './CardList.module.css';
import Card from '../../components/Card/Card';
import CardLayout from '../../components/CardLayout/CardLayout';
import { selectAdverts } from '../../redux/adverts/selectors';
import { useSelector } from 'react-redux';

const CardList = () => {
  const adverts = useSelector(selectAdverts);
  return (
    <ul className={css.cardList}>
      {adverts.map(advert => (
        <CardLayout key={advert._id}>
          <Card advert={advert} />
        </CardLayout>
      ))}
    </ul>
  );
};

export default CardList;
