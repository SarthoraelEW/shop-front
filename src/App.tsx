import { FC } from 'react';
import './App.scss';
import ProductsContextProvider from './view/context/ProductsContext/ProductsContextProvider';
import Routing from './view/context/Routing/Routing';

const App: FC = () => {
  return (
    <ProductsContextProvider>
      <Routing />
    </ProductsContextProvider>
  );
};

export default App;
