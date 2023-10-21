import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="checkbox">
      <input
        className="checkbox__tumb checkbox__tumb_type_active"
        type="checkbox"
      />
      <span className=" checkbox__tumb checkbox__tumb_type_disactive" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
