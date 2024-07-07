import css from './CardDitails.module.css';
import sprite from '../../assets/symbol-defs.svg';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';

const CardDitails = ({ closeModal, advert }) => {
  return (
    <div className={css.ditailsContainer}>
      <div className={css.header}>
        <div className={css.headerTop}>
          <h1 className={css.headerTopName}>{advert.name}</h1>
          <svg className={css.closeBtn} onClick={closeModal} stroke="black">
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </div>
        <div className={css.ratingAndLocation}>
          <svg className={css.star} width="16" height="16">
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <span className={css.reviews}>
            {advert.rating}({advert.reviews.length} reviews)
          </span>
          <svg
            className={css.mapPin}
            width="16"
            height="24"
            fill="none"
            stroke="black"
          >
            <use href={`${sprite}#icon-map-pin`}></use>
          </svg>
          <span className={css.location}>{advert.location}</span>
        </div>
        <span className={css.price}>€{advert.price}.00</span>
      </div>
      <ul className={css.images}>
        <li
          className={css.imagesItem}
          style={{
            background: ` url(${advert.gallery[0]}) lightgray -57px -4.651px / 195.679% 103.001% no-repeat`,
          }}
        ></li>
        <li
          className={css.imagesItem}
          style={{
            background: ` url(${advert.gallery[1]}) lightgray -57px -4.651px / 195.679% 103.001% no-repeat`,
          }}
        ></li>
        <li
          className={css.imagesItem}
          style={{
            backgroundImage: ` url(${advert.gallery[2]}) `,
          }}
        ></li>
      </ul>
      <p className={css.supportingText}>{advert.description}</p>
      <div className={css.container}>
        <Features />
        <Reviews />
      </div>
    </div>
  );
};

export default CardDitails;
