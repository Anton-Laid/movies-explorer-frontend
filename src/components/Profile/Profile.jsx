import './Profile.css';
import { useFormAndValidation } from '../../hooks/validation';
import * as auth from '../../utils/Auth';
import { useNavigate } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { validateEmail, validateName } from '../../utils/validation';

const Profile = ({
  setPopapInfoTooltip,
  setMessage,
  setLoggedIn,
  setUserData,
  setRenderMovi,
}) => {
  const { values, handleChange, isValid, setValues, setIsValid } =
    useFormAndValidation();
  const currentUser = useContext(CurrentUserContext);
  const [showSaveBtn, setShowSaveBtn] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate({ values });
  };

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setIsValid(true);
    }
  }, [currentUser, setIsValid, setValues]);

  const onProfileUpdate = ({ values }) => {
    auth
      .upDateUser(values)
      .then(() => {
        setValues({});
        setShowSaveBtn(false);
        setShowSuccessMsg(true);
        setUserData(values);
      })
      .catch((err) => {
        console.log(err.message);
        setPopapInfoTooltip(true);
        setMessage({
          imgPath: false,
          text: 'Что-то пошло не так! Попробуйте ещё раз...',
        });
      });
  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/');
    setLoggedIn(false);
    setUserData({});
    setPopapInfoTooltip(true);
    setMessage({
      imgPath: true,
      text: 'Ждем вас снова!',
    });
    setRenderMovi(false);
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
            placeholder="Введите имя"
            value={values.name || ''}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            disabled={!showSaveBtn}
          />
          <span className="profile__input-error profile__input-error_activ">
            {validateName(values.name).message}
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
            placeholder="Введите почту"
            value={values.email || ''}
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            disabled={!showSaveBtn}
          />
          <span
            className="profile__input-error 
             profile__input-error_activ"
          >
            {validateEmail(values.email).message}
          </span>
        </label>
        {showSuccessMsg ? (
          <span className="profile__success-message">
            Данные успешно обновлены!
          </span>
        ) : (
          ''
        )}
        {showSaveBtn ? (
          <button
            className="profile__btn-save"
            type="submit"
            disabled={
              !isValid ||
              validateEmail(values.email).invalid ||
              validateName(values.name).invalid ||
              (values.name === currentUser.name &&
                values.email === currentUser.email)
            }
          >
            Сохранить
          </button>
        ) : (
          <button
            className="profile__btn-register"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowSaveBtn(true);
              setShowSuccessMsg(false);
            }}
          >
            Редактировать
          </button>
        )}
      </form>
      <button className="profile__btn-exit" onClick={handleSignOut}>
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
