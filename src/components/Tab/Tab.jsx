import css from './Tab.module.css';

const Tab = ({ children }) => {
  return <li className={css.tab}>{children}</li>;
};

export default Tab;
