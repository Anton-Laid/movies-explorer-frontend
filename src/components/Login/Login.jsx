import Logo from '../Logo/Logo';
import './Login.css';
import Links from '../Links/Links';
import { useFormAndValidation } from '../../hooks/validation';

const Login = () => {
  const { values, errors, isValue, handleChange } = useFormAndValidation();

  return (
    <section className="login">
      <Logo modifier={'login__logo-positioning'} />
      <h2 className="login__title">Рады видеть!</h2>
      <form>
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
              isValue ? '' : 'login__input-error_activ'
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
              isValue ? '' : 'login__input-error_activ'
            }`}
          >
            {errors.password}
          </span>
        </label>
        <button className="login__submit" type="submit">
          Войти
        </button>
        <div className="login__box-btn">
          <p className="login__subtitle">Ещё не зарегистрированы?</p>
          <Links
            path={'/signup'}
            classStyle={'register__btn-signin'}
            title={'Регистрация'}
          />
        </div>
      </form>
    </section>
  );
};

export default Login;
