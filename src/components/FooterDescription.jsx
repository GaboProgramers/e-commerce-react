import React from 'react'
import './styles/footer.css'

const FooterDescription = () => {
    return (
        <footer className='footer__container'>
            <p className='footer__title'>&copy; Yostin Gutierrez <span className='yeard'>2022</span></p>
            <div className="links">
                <a className='link' href="#"><i className='bx bxl-instagram icon' ></i></a>
                <a className='link' href="#"><i className='bx bxl-linkedin icon' ></i></a>
                <a className='link' href="#"><i className='bx bxl-youtube icon' ></i></a>
            </div>
        </footer>
    )
}

export default FooterDescription