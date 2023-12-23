import { FC } from 'react';
import './App.css';
import ProductsContextProvider from './view/context/ProductsContext/ProductsContextProvider';
import Test from './view/components/Test';

const App: FC = () => {
  return (
    <ProductsContextProvider>
      <Test />
    </ProductsContextProvider>
  );
};

export default App;
