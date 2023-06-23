import './Profile.css';
import { useFormAndValidation } from '../../hooks/validation';
import * as auth from '../../utils/Auth';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { validateEmail, validateName } from '../../utils/validation';

const Profile = ({ setPopapInfoTooltip, setMessage, setLoggedIn }) => {
  const { values, errors, isValue, handleChange, setValues } =
    useFormAndValidation();
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate({ values });
  };

  const onProfileUpdate = ({ values }) => {
    auth
      .upDateUser(values)
      .then((res) => {
        setPopapInfoTooltip(true);
        setMessage({
          imgPath: true,
          text: 'Данные изменены',
        });
        setValues({});
      })
      .catch((err) => {
        setPopapInfoTooltip(true);
        setMessage({
          imgPath: false,
          text: err.message,
        });
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    navigate('/');
    setLoggedIn(false);
  };

  return (
    <section className="profile">
      <form className="profile__from" onSubmit={handleSubmit}>
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>

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
            {validateName(values.name).invalid}
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
            {validateEmail(values.email).invalid}
          </span>
        </label>
        <button
          className="profile__btn-register"
          type="submit"
          disabled={
            validateEmail(values.email).invalid ||
            validateName(values.name).invalid
          }
        >
          Редактировать
        </button>
      </form>
      <button className="profile__btn-exit" onClick={handleSignOut}>
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
