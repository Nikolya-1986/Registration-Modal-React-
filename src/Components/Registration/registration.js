import React, { useState, useEffect } from 'react'
import "./registration.css"
import Modal from '../Modal/modal'

const Registration = () => {

    //инпуты необходимо сделать управляемыми, создать для каждого состояние, по умолчанию путые строки, данные состояния будут находиться в инпуте
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //состояние которые будут отражать были в инпуте или нет, по умолчанию false, но если пользователь наведении становиться true
    const [nameDirty, setNameDirty] = useState(false);
    const [surnameDirty, setSurnameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    //состояние которое будет отражать ошибки
    const [nameError, setNameError] = useState('The name field cannot be empty')
    const [surnameError, setSurnameError] = useState('The surname field cannot be empty')
    const [emailError, setEmailError] = useState('The email field cannot be empty')
    const [passwordError, setPasswordError] = useState('The password field cannot be empty')
    //состояние которое отвечает за видимость окна
    const [modal, setModal] = useState(false)
    //состояние отвечает за валидность формы
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(nameError || surnameError || emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, surnameError, emailError, passwordError])

    const submitHandler = (e) => {//Валидна ли форма
        e.preventDefault();
        console.log(`Name: ${name}`)
        console.log(`Surname: ${surname}`)
        console.log(`Email: ${email}`)
        console.log(`Password: ${password}`)
    }

    const dirtyHandler = (e) => {//Event blur сработает когда пользователь покидает поле ввода и появиться ошибка если поле заполнено неверно
        switch(e.target.name) {
            case 'name':
                setNameDirty(true)
            break;
            case 'surname':
                setSurnameDirty(true)
            break;
            case 'email':
                setEmailDirty(true)
            break;
            case 'password':
                setPasswordDirty(true)
            break;
        }
    }

    const nameHandler = (e) => {//Функция которая будет менять текущее состояние на то которое в инпут, если оно соответствует условию
        setName(e.target.value)
        const regName = /^[\D][\w]+$/;
        if(!regName.test(String(e.target.value).toLowerCase())) {
            setNameError('The name must contain letters and numbers')
            if(!e.target.value) {
                setNameError('The name field cannot be empty')
            }
        } else {
            setNameError('')
        }
    }

    const surnameHandler = (e) => {
        setSurname(e.target.value)
        const regSurName = /^[a-zа-яё]+$/;
        if(!regSurName.test(String(e.target.value).toLowerCase())) {
            setSurnameError('The surname must contain only letters')
            if(!e.target.value) {
                setSurnameError('The surname field cannot be empty')
            }
        } else {
            setSurnameError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.test(String(e.target.value).toLowerCase())){
            setEmailError('Invalid email')
            if(!e.target.value) {
                setEmailError('The email field cannot be empty')
            }
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 9) {
            setPasswordError('The password must be at least 3 and no more than 9 characters')
            if(!e.target.value) {
                setPasswordError('The password field cannot be empty')
            }
        } else {
            setPasswordError('')
        }
    }

    return (
        <div className='container text-center'>
            <form
                className='col-lg-6 col-md-8'
                onSubmit={submitHandler}
                >
                <h1>
                    Registration user
                </h1>
                <div className='form-group'>
                    <input
                        className='form-control'
                        onBlur={e => dirtyHandler(e)}
                        onChange={e => nameHandler(e)}
                        value={name}//для того что бы инпут был управляем, передаётся начальное состояние
                        name='name'
                        type='text'
                        placeholder='Enter yor name...'
                    />
                    {
                        (nameDirty && nameError) && 
                        <div 
                            className='error'
                            style={{color: 'red'}}
                            >
                                {nameError}
                        </div>
                    }
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        onBlur={e => dirtyHandler(e)}
                        onChange={e => surnameHandler(e)}
                        value={surname}
                        name='surname'
                        type='text'
                        placeholder='Enter yor surname...'
                    />
                    {
                        (surnameDirty && surnameError) &&
                        <div 
                            className='error'
                            style={{color: 'red'}}
                            >
                                {surnameError}
                        </div>
                    }
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        onBlur={e => dirtyHandler(e)}
                        onChange={e => emailHandler(e)}
                        value={email}
                        name='email'
                        type='text'
                        placeholder='Enter yor email...'
                    />
                    {
                        (emailDirty && emailError) &&
                        <div 
                            className='error'
                            style={{color: 'red'}}
                            >
                                {emailError}
                        </div>
                    }
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        onBlur={e => dirtyHandler(e)}
                        onChange={e => passwordHandler(e)}
                        value={password}
                        name='password'
                        type='text'
                        placeholder='Enter yor password...'
                    />
                    {
                        (passwordDirty && passwordError) &&
                        <div 
                            className='error'
                            style={{color: 'red'}}
                            >
                                {passwordError}
                        </div>
                    }
                </div>
                <input
                    className='btn btn-primary'
                    onClick={() => setModal(true)}
                    disabled={!formValid}
                    value='Registration'
                    type='submit'
                />
            </form>
            <Modal
                title={'Hello User!'}
                isOpened={modal}
                onModalClose={() => setModal(false)}
                >
                    <ul>
                        <li>
                            Your name: {name}
                        </li>
                        <li>
                            Your surname: {surname}
                        </li>
                        <li>
                            Your email: {email}
                        </li>
                        <li>
                            Your password: 'We won't tell anyone your password'
                        </li>
                    </ul>
            </Modal>
        </div>
    )
}

export default Registration