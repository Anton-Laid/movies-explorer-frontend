import './Profile.css';
import { useFormAndValidation } from '../../hooks/validation';

const Profile = () => {
  const { values, errors, isValue, handleChange } = useFormAndValidation();

  return (
    <section className="profile">
      <form className="profile__from">
        <h2 className="profile__title">Привет, Ксения!</h2>

        <label className="profile__label" htmlFor="name">
          Имя
          <input
            className="profile__input"
            id="name"
            name="name"
            type="text"
            required
            placeholder=""
            value={values.name || ''}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
          />
          <span
            className={`profile__input-error  ${
              isValue ? '' : 'profile__input-error_activ'
            }`}
          >
            {errors.name}
          </span>
        </label>

        <label className="profile__label" htmlFor="email">
          E-mail
          <input
            className="profile__input"
            id="email"
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
            className={`profile__input-error  ${
              isValue ? '' : 'profile__input-error_activ'
            }`}
          >
            {errors.email}
          </span>
        </label>
        <button className="profile__btn-register" type="submit">
          Редактировать
        </button>
        <button className="profile__btn-exit">Выйти из аккаунта</button>
      </form>
    </section>
  );
};

export default Profile;
