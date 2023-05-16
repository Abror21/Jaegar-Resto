import classes from './index.module.css';
import card from '../../../../assets/icons/card.png';
import paypal from '../../../../assets/icons/paypal.png';
import wallet from '../../../../assets/icons/wallet.png';

const PaymentCart = () => {
  return (
    <div className={classes.payment}>
      <div className={classes.header}>
        <h4>Payment</h4>
        <p>3 payment method available</p>
      </div>
      <div className={classes.body}>
        <h5>Payment Method</h5>
        <div className={classes['payment-methods']}>
          <div>
            <img src={card} alt="Card" />
            <span>Credit Card</span>
          </div>
          <div>
            <img src={paypal} alt="Card" />
            <span>Credit Card</span>
          </div>
          <div>
            <img src={wallet} alt="Card" />
            <span>Credit Card</span>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group w-50">
            <label for="expiration">Password</label>
            <input type="number" className="form-control" id="expiration" placeholder="Password" />
          </div>
          <div className="form-group w-50">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default PaymentCart