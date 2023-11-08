import './FilterCheckbox.css';

function FilterCheckbox({ isShort, isCheck }) {
  return (
    <label className="checkbox">
      <input
        className="checkbox__tumb checkbox__tumb_type_default"
        type="checkbox"
        checked={isShort}
        onChange={isCheck}
      />
      <span className=" checkbox__tumb checkbox__tumb_type_design" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
