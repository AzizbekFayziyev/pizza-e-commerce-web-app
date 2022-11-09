import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import data from '../../data/data';
import { fetchProducts } from '../../redux/actions/action';
import Header from '../header/Header';
import Product from './Product';
import ProductInput from './ProductInput';

export default function Products() {
    // PRODUCTS SECTION
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(data));
    }, []);

    return (
        <>
            <Header />
            <section className='products container'>
                <h1 className='title'>BARCHA MAHSULOTLAR RO'YXATI</h1>
                <ProductInput />
                <div data-bs-spy="scroll" data-bs-target="#menu-scrollpy" data-bs-offset="0"  tabIndex="0" className="cards">
                    <Product />
                </div>

                <div className='products-alertion my-5'>
                    <h2>Bellissimo Pizza - 45 DAQIQA YOKI PITSA BEPUL</h2>
                    <p>45 daqiqada yetkazib berishga ulgurmadikmi? Sizga bepul oʻrta kattalikdagi pitsa uchun sms-kod joʻnatamiz. Biz sizning vaqtingizni qadrlaymiz: tezlik va sifatni kafolatlaymiz!</p>
                </div>
            </section>
        </>
    )
}
