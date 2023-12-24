import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from '../../components/Test';
import withHeaderAndFooter from '../../hoc/WithHeaderAndFooter/WithHeaderAndFooter';

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={withHeaderAndFooter(<Test />)} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
