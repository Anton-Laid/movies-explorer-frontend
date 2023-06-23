import Logo from '../Logo/Logo';
import './Register.css';
import { useFormAndValidation } from '../../hooks/validation';
import * as auth from '../../utils/MainApi';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = ({ setPopapInfoTooltip, setMessage, setLoggedIn }) => {
  const { values, errors, isValid, handleChange } = useFormAndValidation();
  const navigate = useNavigate();
  const [infoMes, setInfoMes] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    onRegister({ values });
  };

  const onRegister = ({ values }) => {
    auth
      .register(values)
      .then((res) => {
        console.log(res);
        navigate('/signin', { replace: true });
        setPopapInfoTooltip(true);
        setMessage({
          imgPath: true,
          text: 'Вы успешно зарегистрировались',
        });
      })
      .catch((err) => {
        if (err.status === 409) {
          setInfoMes('Этот пользователь уже зарегистрирован');
        }
        console.log(err);
      });
  };

  return (
    <section className="register">
      <Logo modifier={'register__logo-positioning'} />
      <form className="register__form" onSubmit={handelSubmit}>
        <h2 className="register__title">Добро пожаловать!</h2>
        <label className="register__lable" htmlFor="register-name">
          Имя
          <input
            className="register__input"
            id="register-name"
            name="name"
            type="text"
            value={values.name || ''}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            required
            placeholder=""
          />
          <span
            className={`register__input-error  ${
              isValid ? '' : 'register__input-error_activ'
            }`}
          >
            {errors.name}
          </span>
        </label>
        <label className="register__lable" htmlFor="register-email">
          E-mail
          <input
            className="register__input"
            id="register-email"
            name="email"
            type="email"
            required
            value={values.email || ''}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            placeholder=""
          />
          <span
            className={`register__input-error  ${
              isValid ? '' : 'register__input-error_activ'
            }`}
          >
            {errors.email}
          </span>
        </label>
        <label className="register__lable" htmlFor="register-password">
          Пароль
          <input
            className="register__input"
            id="register-password"
            name="password"
            type="password"
            required
            autoComplete="off"
            placeholder=""
            value={values.password || ''}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
          />
          <span
            className={`register__input-error  ${
              isValid ? '' : 'register__input-error_activ'
            }`}
          >
            {errors.password}
          </span>
        </label>
        <span
          className={`register__error-message ${
            infoMes ? 'register__error-message_activ' : ''
          }`}
        >
          {infoMes}
        </span>
        <button
          className={`register__btn-save ${
            isValid ? '' : 'register__btn-save_disabled'
          }`}
          type="submit"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
        <div className="register__box-btn">
          <p className="register__paragraph">Уже зарегистрированы?</p>
          <Link to={'/signin'} className="register__btn-signin">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
