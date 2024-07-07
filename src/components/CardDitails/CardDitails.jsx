import css from './CardDitails.module.css';
const CardDitails = ({ closeModal, advert }) => {
  return (
    <div>
      <div className={css.header}>
        <div className={css.headerTop}>
          <h1 className={css.headerTopName}>{advert.name}</h1>
          <svg className={css.closeBtn} onClick={closeModal} stroke="black">
            <use href="/public/icons/symbol-defs.svg#icon-close"></use>
          </svg>
        </div>
        <div className={css.ratingAndLocation}>
          <svg className={css.star} width="16" height="16">
            <use href="/icons/symbol-defs.svg#icon-star"></use>
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
            <use href="/icons/symbol-defs.svg#icon-map-pin"></use>
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
        >
          {/* <img className={css.img} src={advert.gallery[0]} alt="photo" /> */}
        </li>
        <li
          className={css.imagesItem}
          style={{
            background: ` url(${advert.gallery[1]}) lightgray -57px -4.651px / 195.679% 103.001% no-repeat`,
          }}
        >
          {/* <img className={css.img} src={advert.gallery[1]} alt="photo" /> */}
        </li>
        <li
          className={css.imagesItem}
          style={{
            backgroundImage: ` url(${advert.gallery[2]}) `,
          }}
        >
          {/* <img className={css.img} src={advert.gallery[2]} alt="photo" /> */}
        </li>
      </ul>
      <p className={css.supportingText}>{advert.description}</p>
    </div>
  );
};

export default CardDitails;
