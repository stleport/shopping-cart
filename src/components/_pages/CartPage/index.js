import React from 'react';
import CartLayout from '../../_templates/CartLayout';
import { Header } from '../../_organisms/Header';
import CartList from '../../_organisms/CartList';
import Footer from '../../_organisms/Footer';

const CartPage = props => (
  (
    <CartLayout
      header={<Header {...props} />}
      footer={<Footer />}
    >
      <CartList {...props} />
    </CartLayout>
  )
);

export default CartPage;
