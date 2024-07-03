import css from './CardHeader.module.css';

const CardHeader = () => {
  return (
    <div className={css.cardHeader}>
      <div className={css.cardHeaderTop}>
        <h2 className={css.title}>Name</h2>
        <div className={css.priceAndFav}>
          <span className={css.price}>$Price</span>
          {/* <svg className={css.favorites}>hard</svg> */}
        </div>
      </div>
      <div className={css.cardHeaderBottom}>
      {/* <svg></svg> */}
        <span className={css.reviews}>reviews</span>
        {/* <svg></svg> */}
        <span className={css.location}>location</span>
      </div>
    </div>
  );
};

export default CardHeader;
