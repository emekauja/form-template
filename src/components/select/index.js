import * as React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Arrow } from '../../assets/icons/select-arrow.svg';
import './elements.css';

const Select = ({ defaultValue, value, options, label, handleSelect }) => (
  <div className="select">
    <fieldset>
      <legend htmlFor="sort" className="select-label">
        {label}
      </legend>
      <div className="select-wrapper">
        <select
          name={label}
          id="sort"
          className="select-box"
          required
          defaultValue={defaultValue}
          value={value}
          onChange={handleSelect}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <Arrow className="icon-arrow" />
      </div>
    </fieldset>
  </div>
);

Select.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default Select;
