import { Toast } from 'bootstrap';
import React, { useEffect } from 'react';
import { FiArrowLeftCircle, FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import data from '../../data/data';
import { productToCart } from '../../redux/actions/action';

export default function SelectedProduct() {
  // SELECTED PRODUCT
  const { id } = useParams();
  const filteredProduct = data.filter(p => {
    return p.title.toLowerCase().includes(id.toLowerCase());
  });
  // PRODUCT TO CART
  const dispatch = useDispatch();

  const toCart = (product) => {
    dispatch(productToCart(product));
    toast.info(`"${id}" savatchaga qo'shildi`);
  };
  // Scroll to top

  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
    });
  }, [id])

  return (
    <>
      <div className='container my-5'>
        {filteredProduct.length ? filteredProduct.map((product) => (
          <div key={product.id} className="slectedProduct">
            <Link to="/" className="btn-prev"><i><FiArrowLeftCircle /></i></Link>
            <div className="content"> <img src={product.img} alt={product.title} />
              <h1>{product.title}</h1>
              <h2>{product.price} SO'M</h2>
              <p>{product.desc}</p>
              <button onClick={() => toCart(product)} className="btn-global"><i><FiShoppingCart /></i> SAVATCHAGA QO"SHISH</button>
            </div>
          </div>
        )) : <h1 className='my-5 text-danger text-center'>MAHSULOT TOPILMADI.</h1>}
      </div>

      <ToastContainer autoClose={1500} />
    </>
  )
}
