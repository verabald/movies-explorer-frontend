import './FilterCheckbox.css';

function FilterCheckbox({ isShorts, onCheck }) {
  return (
    <label className="checkbox">
      <input
        className="checkbox__tumb checkbox__tumb_type_default"
        type="checkbox"
        checked={isShorts}
        onChange={onCheck}
      />
      <span className=" checkbox__tumb checkbox__tumb_type_design" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
