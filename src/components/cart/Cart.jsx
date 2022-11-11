import React from 'react';
import { FaMinusCircle, FaPlusCircle, FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import emptyCart from "../../assets/empty.gif";
import data from '../../data/data';
import { productCartDec, productCartInc, productCartRemove, productToCart } from '../../redux/actions/action';

export default function Cart() {
  const productCart = useSelector(state => state.cart.cartData);
  const productAllPrice = useSelector(state => state.cart.allPrice);
  const dispatch = useDispatch();
  // salads
  const salads = data.filter(s => s.category.includes("salad"));
  // sauces
  const sauces = data.filter(s => s.category.includes("sauce"));
  // product add to cart
  const addProduct = (product) => {
    dispatch(productToCart(product));
    toast.info(`${product.title} savatchaga qo'shildi!`)
  }
  // product quantity increment
  const quantityInc = (quantity) => {
    dispatch(productCartInc(quantity));
  }
  // product quantity decrement
  const quantityDec = (quantity) => {
    dispatch(productCartDec(quantity));
  }
  // removing product from cart
  const removeProduct = (id) => {
    dispatch(productCartRemove(id))
  }

  // product purchased

  const purchased = () => {
    toast("Hozr olib kelib beraman 😂");
  }

  return (
    <div className='container my-5'>
      <div className="cart-container">
        {productCart.length ? productCart.map((product) => (
          <div key={product.id} className="cart">
            <div className="content">
              <img src={product.img} alt={product.title} />
              <h2>{product.title}</h2>
            </div>
            <div className="price">
              <h3>{product.price} so'm</h3>
              <div className="quantity">
                <i onClick={() => quantityDec(product)}><FaMinusCircle /></i>
                <h3>{product.quantity}</h3>
                <i onClick={() => quantityInc(product)}><FaPlusCircle /></i>
              </div>
              <i className='close' onClick={() => removeProduct(product)}><FaWindowClose /></i>
            </div>
          </div>
        )) : <>
          <img className='mx-auto d-block img-rounded img-thumbnail' src={emptyCart} alt="bo'sh savatcha" />
          <h1 className='my-5 title'>SAVATCHANGIZ BO'SH</h1>
        </>}
      </div>

      {productCart.length ?
        <>
          <h1 className="title">Qo'shishni maslahat beramiz:</h1>
          <div className="recommended-products">
            {salads.map((product) => (
              <div key={product.id} className="card">
                <img src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <h4>{product.price} so'm</h4>
                <button onClick={() => addProduct(product)} className="btn-global">QO'SHISH</button>
              </div>
            ))}
          </div>

          <div className="recommended-products">
            {sauces.map((product) => (
              <div key={product.id} className="card">
                <img src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <h4>{product.price} so'm</h4>
                <button onClick={() => addProduct(product)} className="btn-global">QO'SHISH</button>
              </div>
            ))}
          </div>

          <div className="purchase">
            <ul className="purchased-products">
              {productCart.map(({ id, title, quantity, oldPrice }) => (
                <li key={id}><span>{quantity}</span>ta <span>{title}</span> <span>{oldPrice}</span> so'm dan</li>
              ))}
            </ul>
            <h3>Umumiy narx: <span>{productAllPrice} SO'M</span></h3>
            <button onClick={purchased} className="btn-global">Buyurtmani Rasmiylashtirish</button>
          </div>

          <ToastContainer autoClose={1000} />
        </> : null}
    </div>
  )
}
