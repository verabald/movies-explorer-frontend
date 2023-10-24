import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="checkbox">
      <input
        className="checkbox__tumb checkbox__tumb_type_default"
        type="checkbox"
      />
      <span className=" checkbox__tumb checkbox__tumb_type_design" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
