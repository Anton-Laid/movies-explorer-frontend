import Logo from "../Logo/Logo";
import "./Register.css";
import Links from "../Links/Links";
import { useFormAndValidation } from "../../hooks/validation";

const Register = ({ nameDiryty }) => {
  const { values, errors, isValue, handleChange } = useFormAndValidation();

  return (
    <section className="register">
      <Logo styleLogo={true} />
      <form>
        <h2 className="register__title">Добро пожаловать!</h2>
        <label htmlFor="register-name" className="register__lable">
          Имя
          <input
            id="register-name"
            name="name"
            className="register__input"
            type="text"
            value={values.name || ""}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            required
            placeholder=""
          />
          <span
            className={`register__input-error  ${
              isValue ? "" : "register__input-error_activ"
            }`}
          >
            {errors.name}
          </span>
        </label>

        <label htmlFor="register-email" className="register__lable">
          E-mail
          <input
            id="register-email"
            name="email"
            className="register__input"
            type="email"
            required
            value={values.email || ""}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            placeholder=""
          />
          <span
            className={`register__input-error  ${
              isValue ? "" : "register__input-error_activ"
            }`}
          >
            {errors.email}
          </span>
        </label>
        <label htmlFor="register-password" className="register__lable">
          Пароль
          <input
            id="register-password"
            name="password"
            className="register__input"
            type="password"
            required
            autoComplete="off"
            placeholder=""
            value={values.password || ""}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
          />
          <span
            className={`register__input-error  ${
              isValue ? "" : "register__input-error_activ"
            }`}
          >
            {errors.password}
          </span>
        </label>

        <button className="register__btn-save" type="submit">
          Зарегистрироваться
        </button>
        <div className="register__box-btn">
          <p className="register__paragraph">Уже зарегистрированы?</p>
          <Links
            path={"/signin"}
            classStyle={"register__btn-signin"}
            title={"Войти"}
          />
        </div>
      </form>
    </section>
  );
};

export default Register;
