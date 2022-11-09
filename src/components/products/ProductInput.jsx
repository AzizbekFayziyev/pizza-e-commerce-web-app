import React, { useState } from 'react'
import { FaWindowClose } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import data from '../../data/data';
import { fetchProducts, searchProducts } from '../../redux/actions/action';

export default function ProductInput() {
    // PRODUCTS SEARCH INPUT
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const onSearch = () => {
        if (inputValue === "") {
            dispatch(fetchProducts(data));
        } else {
            dispatch(searchProducts(inputValue));
            toast.info(`"${inputValue}" so'rovi bo'yicha natijalar`);
        };
    };

    const clearResult = () => {
        dispatch(fetchProducts(data));
        setInputValue("");
        toast.warn(`qidiruv so'rovi bekor qilindi!`);
    }

    return (
        <div className="d-flex align-items-center justify-content-center">
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="search" placeholder='Donar pitsa...' className='form-control form-input my-4' />
            <button onClick={onSearch} className="btn btn-success inp-btn">QIDIRISH</button>
            <button onClick={clearResult} className='btn btn-danger inp-btn'><FaWindowClose /></button>
            {/* ALERT TOAST */}
            <ToastContainer
                autoClose={2000}
            />
        </div>
    )
}
