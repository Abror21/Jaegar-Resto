import React, { useContext, useState, useEffect } from 'react';
import classes from './index.module.css';
import EmptyCart from './components/empty-cart';
import { contextData } from '../../services/context-store';
import FullCart from './components/full-cart';
import PaymentCart from './components/payment-cart';

const Cart = () => {
  const [paymentCart, setPaymentCart] = useState(false);
  const { activeTab, changeActiveTab, orderList } = useContext(contextData);

  useEffect(() => {
    setPaymentCart(false);
  }, [activeTab])
  
  return (
    <>
      <div className={`${classes['cart-back']} ${activeTab === 7 ? classes.active : ''}`} onClick={() => changeActiveTab(2)} />
      <div className={`${classes['toggle-cart']}  ${(activeTab === 7 && !paymentCart) ? classes.active : ''}`}>
        {orderList?.length ? <FullCart handleClick={() => setPaymentCart(true)} /> : <EmptyCart />}
      </div>
      <div className={`${classes['toggle-payment']} ${(paymentCart && activeTab === 7) && classes.active}`}>
          <PaymentCart />
      </div>
    </>
  )
}

export default Cart;