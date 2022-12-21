import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/login.css'

const Login = () => {
    const navigate = useNavigate()
    const { handleSubmit, reset, register } = useForm()

    const handleSignUp = () => {
        navigate('/signUp')
    }

    const submit = (data) => {
        console.log(data);
        reset({
            email: "",
            password: ""
        })
    }

    return (
        <section className='login__container'>
            <div className='login__content'>
                <strong className='login__title'>Welcome! Enter your email and password to continue</strong>
                <div className='login__data'>
                    <h4 className='data__title'>Test Data</h4>
                    <p className='data__email'><span className='icon'><i className='bx bx-envelope' ></i></span> john@gmail.com</p>
                    <p className='data__pass'><span className='icon'><i className='bx bx-lock-alt' ></i></span> john1234</p>
                </div>
                <form className='login__form' onSubmit={handleSubmit(submit)}>
                    <div className='form__content'>
                        <label className='form__label' htmlFor="email">Email</label>
                        <input className='form__input' id='email' type="email" placeholder='Enter to Email' {...register("email")} />
                    </div>
                    <div className='form__content'>
                        <label className='form__label' htmlFor="password">Password</label>
                        <input className='form__input' id='password' type="password" placeholder='Enter to password' {...register("password")} />
                    </div>
                    <button className='login__btn'>Login</button>
                </form>
                <div className="sing-up">
                    <span>Don't have an account?</span>
                    <button className='up-btn' onClick={handleSignUp}>Sign up</button>
                </div>
            </div>
        </section>
    )
}

export default Login