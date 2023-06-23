import './SearchForm.css';
import inputButton from '../../images/top.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import btn from '../../images/icon.svg';
import { useFormAndValidation } from '../../hooks/validation';

const SearchForm = ({
  handleShortFilms,
  setFilteredMovies,
  filteredMovies,
}) => {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  return (
    <div className="search-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('dsfds');
        }}
      >
        <img alt="лупа" src={btn} className="search-form__magnifier" />

        <input
          className="search-form__input"
          name="search"
          type="search"
          required
          value={filteredMovies || ''}
          autoComplete="off"
          placeholder="Фильм"
          min="1"
          onChange={(e) => setFilteredMovies(e.target.value)}
        />
        <span className="search-form__message-block">{errors.search}</span>
        <button
          type="submit"
          className="search-form__button"
          disabled={!isValid}
        >
          <img
            alt="кнопка"
            src={inputButton}
            className="search-form__button-img"
          />
        </button>

        <div className="search-form__line" />

        <FilterCheckbox handleShortFilms={handleShortFilms} />
      </form>
    </div>
  );
};

export default SearchForm;
