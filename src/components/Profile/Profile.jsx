import Header from "../Header/Header";
import "./Profile.css";
import { useFormAndValidation } from "../../hooks/validation";

const Profile = ({ setOpenPupap, hendleClosePopup, authorization }) => {
  const { values, errors, isValue, handleChange } = useFormAndValidation();

  return (
    <>
      <form className="profile">
        <h2 className="profile__title">Привет, Ксения!</h2>

        <label className="profile__label" htmlFor="name">
          Имя
          <input
            id="name"
            name="name"
            className="profile__input"
            type="text"
            required
            placeholder=""
            value={values.name || ""}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
          />
          <span
            className={`profile__input-error  ${
              isValue ? "" : "profile__input-error_activ"
            }`}
          >
            {errors.name}
          </span>
        </label>

        <label className="profile__label" htmlFor="email">
          E-mail
          <input
            id="email"
            name="email"
            className="profile__input"
            type="email"
            required
            placeholder=""
            value={values.email || ""}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
          />
          <span
            className={`profile__input-error  ${
              isValue ? "" : "profile__input-error_activ"
            }`}
          >
            {errors.email}
          </span>
        </label>
        <button className="profile__btn-register">Редактировать</button>
        <button className="profile__btn-exit">Выйти из аккаунта</button>
      </form>
    </>
  );
};

export default Profile;
