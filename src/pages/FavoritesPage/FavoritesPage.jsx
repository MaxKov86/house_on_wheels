import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import css from './Favorites.module.css';
import { getAllFavorites } from '../../redux/favorites/operations';
import { useEffect } from 'react';
import { selectFavorites } from '../../redux/favorites/selectors';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  useEffect(() => {
    dispatch(getAllFavorites());
  }, [dispatch]);
  return (
    <Layout>
      {favorites ? (
        <ul className={css.favoritesList}>
          {favorites.map(favorite => (
            <li key={favorite._id}></li>
          ))}
        </ul>
      ) : (
        <p>YOUR FAVORIT CAMBERS!</p>
      )}
    </Layout>
  );
};

export default FavoritesPage;
