import React from 'react';
import MenuLayout from '../../_templates/MenuLayout';
import { Header } from '../../_organisms/Header';
import ProductsList from '../../_organisms/ProductsList';
import Footer from '../../_organisms/Footer';

const MenuPage = props => (
  (
    <MenuLayout
      header={<Header {...props} />}
      footer={<Footer />}
    >
      <ProductsList {...props} />
    </MenuLayout>
  )
);

export default MenuPage;
