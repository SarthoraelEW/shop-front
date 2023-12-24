import { ReactNode } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const withHeaderAndFooter = (children: ReactNode): ReactNode => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default withHeaderAndFooter;
