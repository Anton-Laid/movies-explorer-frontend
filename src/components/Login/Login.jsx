import Logo from "../Logo/Logo";
import "./Login.css";
import Links from "../Links/Links";
import { useFormAndValidation } from "../../hooks/validation";

const Login = () => {
  const { values, errors, isValue, handleChange } = useFormAndValidation();

  return (
    <section className="login">
      <Logo styleLogo={true} />
      <form>
        <h2 className="login__title">Рады видеть!</h2>

        <label htmlFor="login-email" className="login__lable">
          E-mail
          <input
            id="login-email"
            name="email"
            className="login__input"
            type="email"
            required
            placeholder=""
            value={values.email || ""}
            minLength="2"
            maxLength="40"
            autoComplete="current-email"
            onChange={handleChange}
          />
          <span
            className={`login__input-error  ${
              isValue ? "" : "login__input-error_activ"
            }`}
          >
            {errors.email}
          </span>
        </label>
        <label htmlFor="login-password" className="login__lable">
          Пароль
          <input
            id="login-passoword"
            name="password"
            className="login__input"
            type="password"
            required
            placeholder=""
            autoComplete="current-password"
            value={values.password || ""}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
          />
          <span
            className={`login__input-error  ${
              isValue ? "" : "login__input-error_activ"
            }`}
          >
            {errors.password}
          </span>
        </label>
        <button className="login__btn-save" type="submit">
          Войти
        </button>
        <div className="login__box-btn">
          <p className="login__paragraph">Ещё не зарегистрированы?</p>
          <Links
            path={"/signup"}
            classStyle={"register__btn-signin"}
            title={"Регистрация"}
          />
        </div>
      </form>
    </section>
  );
};

export default Login;
