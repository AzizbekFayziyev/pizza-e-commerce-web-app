import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Product() {
    // PRODUCT CARDS
    const productData = useSelector(state => state.product.data);
    return (
        <>
            {productData.length ? productData.map(({ id, img, title, desc, price, category, idPage }) => (
                <div className="card" id={idPage ? idPage : ""} key={id}>

                    <img className="card-img-top" src={img} />
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        {desc ? <p className="card-text">{desc}</p> : ""}
                        <p className="card-price">{price} so'm</p>
                        <h4 className="card-category">{category}</h4>
                        <Link to={`/product/${title}`}><button className="btn-global"><i><FiShoppingCart /></i> BUYURTMA BERISH</button></Link>
                    </div>
                </div>

            )) : <h3 className='my-3 mx-auto text-danger'>SIZ IZLAGAN NATIJA TOPILMADI :(</h3>
            }
        </>
    )
}
