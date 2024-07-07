import Button from '../Button/Button';
import css from './Filters.module.css';
import clsx from 'clsx';

const Filters = () => {
  return (
    <form className={css.filtersContainer}>
      <input className={css.location} type="text" placeholder="Ukraine, Kyiv" />
      <p>Filters</p>

      <h2>Vehicle equipment</h2>
      <hr style={{ color: 'black', width: '100%' }} />
      <div className={css.checkboxContainer}>
        <label className={css.label}>
          <span>AC</span>
          <input className={clsx(css.checkbox)} type="checkbox" />
        </label>
        <label className={css.label}>
          <input className={clsx(css.checkbox)} type="checkbox" />
        </label>

        <label className={css.label}>
          <input className={clsx(css.checkbox)} type="checkbox" />
        </label>

        <label className={css.label}>
          <input className={clsx(css.checkbox)} type="checkbox" />
        </label>

        <label className={css.label}>
          <input className={clsx(css.checkbox)} type="checkbox" />
        </label>
      </div>

      <h2>Vehicle equipment</h2>
      <hr style={{ color: 'black', width: '100%' }} />
      <label>
        <input className={css.radio} type="radio" />
      </label>

      <label>
        <input className={css.radio} type="radio" />
      </label>
      <label>
        <input className={css.radio} type="radio" />
      </label>

      <Button type="submit">Send</Button>
    </form>
  );
};

export default Filters;
