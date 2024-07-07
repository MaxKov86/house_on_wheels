// import clsx from 'clsx';
import css from './CardHeader.module.css';

const CardHeader = ({ advert }) => {
  return (
    <div className={css.cardHeader}>
      <div className={css.cardHeaderTop}>
        <h1 className={css.title}>{advert.name}</h1>
        <div className={css.priceAndFav}>
          <span className={css.price}>€{advert.price}.00</span>
          <svg className={css.favorites} width="24" height="24">
            <use href="/public/icons/symbol-defs.svg#icon-Property-1Default"></use>
          </svg>
        </div>
      </div>
      <div className={css.cardHeaderBottom}>
        <svg width="16" height="16">
          <use href="/icons/symbol-defs.svg#icon-star"></use>
        </svg>
        <span className={css.reviews}>
          {advert.rating}({advert.reviews.length} reviews)
        </span>
        <svg className={css.mapPin} width="16" height="24">
          <use href="/icons/symbol-defs.svg#icon-map-pin"></use>
        </svg>
        <span className={css.location}>{advert.location}</span>
      </div>
    </div>
  );
};

export default CardHeader;
