import React from 'react'
import { FiMessageCircle, FiPhoneCall } from 'react-icons/fi'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Bellissimo Pizza</h3>
                        <p>Ommaviy oferta</p>
                        <p>Maxfiylik siyosati</p>
                        <p>Halol sertifikati</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Hamkorlik</h3>
                        <p>Franchayzi</p>
                        <p>Ish o'rinlari</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Bizga qo'ng'iroq</h3>
                        <h2><i><FiPhoneCall /></i> 1174</h2>
                        <p>Qo'llab-quvvatlash xizmati</p>
                    </div>
                </div>

                <h2 className='border-top'>Designed & Created by <a target="_blank" href="https://t.me/avancoder">©AVANCODER</a></h2>
            </div>
        </footer>
    )
}
