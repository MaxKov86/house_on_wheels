// import clsx from 'clsx';
import { useState } from 'react';
import css from './CardHeader.module.css';
import sprite from '../../assets/symbol-defs.svg';
import clsx from 'clsx';

const CardHeader = ({ advert }) => {
  const [favorite, setFavorite] = useState(false);

  const toggle = () => {
    if (!favorite) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
    console.log(favorite);
  };
  return (
    <div className={css.cardHeader}>
      <div className={css.cardHeaderTop}>
        <h1 className={css.title}>{advert.name}</h1>
        <div className={css.priceAndFav}>
          <span className={css.price}>€{advert.price}.00</span>
          <svg
            className={clsx(css.favorites, favorite && css.active)}
            width="24"
            height="24"
            onClick={toggle}
          >
            <use href={`${sprite}#icon-Property-1Default`}></use>
          </svg>
        </div>
      </div>
      <div className={css.cardHeaderBottom}>
        <svg width="16" height="16">
          <use href={`${sprite}#icon-star`}></use>
        </svg>
        <span className={css.reviews}>
          {advert.rating}({advert.reviews.length} reviews)
        </span>
        <svg className={css.mapPin} width="16" height="24">
          <use href={`${sprite}#icon-map-pin`}></use>
        </svg>
        <span className={css.location}>{advert.location}</span>
      </div>
    </div>
  );
};

export default CardHeader;
