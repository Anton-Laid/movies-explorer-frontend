import Logo from '../Logo/Logo';
import './Login.css';
import { useFormAndValidation } from '../../hooks/validation';
import * as auth from '../../utils/MainApi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = ({ setPopapInfoTooltip, setMessage, setLoggedIn }) => {
  const { values, errors, isValid, handleChange } = useFormAndValidation();
  const navigate = useNavigate();
  const [infoMes, setInfoMes] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    onLogin({ values });
  };

  const onLogin = ({ values }) => {
    auth
      .login(values)
      .then((res) => {
        setLoggedIn(true);
        navigate('/movies', { replace: true });
        setPopapInfoTooltip(true);
        setMessage({
          imgPath: true,
          text: 'Вы успешно авторизовались',
        });
      })
      .catch((err) => {
        if (err.status === 401) {
          setInfoMes('Неверная почта или пароль');
        } else setInfoMes('Что-то пошло не так! Попробуйте ещё раз...');
      });
  };

  return (
    <section className="login">
      <Logo modifier={'login__logo-positioning'} />
      <h2 className="login__title">Рады видеть!</h2>
      <form onSubmit={handelSubmit}>
        <label className="login__lable" htmlFor="login-email">
          E-mail
          <input
            className="login__input"
            id="login-email"
            name="email"
            type="email"
            required
            placeholder=""
            value={values.email || ''}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
          />
          <span
            className={`login__input-error  ${
              isValid ? '' : 'login__input-error_activ'
            }`}
          >
            {errors.email}
          </span>
        </label>
        <label className="login__lable" htmlFor="login-passoword">
          Пароль
          <input
            className="login__input"
            id="login-passoword"
            name="password"
            type="password"
            required
            placeholder=""
            value={values.password || ''}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
          />
          <span
            className={`login__input-error  ${
              isValid ? '' : 'login__input-error_activ'
            }`}
          >
            {errors.password}
          </span>
        </label>
        <span
          className={`login__error-message ${
            infoMes ? 'login__error-message_activ' : ''
          }`}
        >
          {infoMes}
        </span>
        <button
          className={`login__submit ${isValid ? '' : 'login__submit_disabled'}`}
          type="submit"
          disabled={!isValid}
        >
          Войти
        </button>
        <div className="login__box-btn">
          <p className="login__subtitle">Ещё не зарегистрированы?</p>
          <Link className="register__btn-signin" to={'/signup'}>
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
