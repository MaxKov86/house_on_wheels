import { useDispatch} from 'react-redux';
import CardList from '../../components/CardList/CardList';

import Layout from '../../components/Layout/Layout';

import { useEffect} from 'react';
import { getAdverts } from '../../redux/adverts/operations';
import Filters from '../../components/Filters/Filters';



const CatalogPage = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);
  

 

  return (
    <Layout>
      <Filters />

      <CardList/>
        
      
      
    </Layout>
  );
};

export default CatalogPage;
