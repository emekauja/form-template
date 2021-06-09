import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  filterByText,
  sortByCategory,
  sortByOrder,
  sortByDate,
} from '../../redux/search/search.actions';
import Select from '../select';
import Search from '../search';
import { catOptions, orderOptions, dateOptions } from './data';
import './elements.css';

const Header = ({ filterText, category, order, created }) => (
  <section>
    <div>
      <Search text={filterText} onChange={() => filterByText(filterText)} />
    </div>

    <div className="sort">
      <div className="sort-container">
        <Select
          label="Category"
          defaultValue="All"
          value={category}
          options={catOptions}
          handleSelect={() => sortByCategory(category)}
        />
      </div>
      <div className="sort-container">
        <Select
          label="Order"
          defaultValue="Default"
          value={order}
          options={orderOptions}
          handleSelect={() => sortByOrder(order)}
        />
      </div>
      <div className="sort-container">
        <Select
          label="Date"
          defaultValue="Default"
          value={created}
          options={dateOptions}
          handleSelect={() => sortByDate(created)}
        />
      </div>
    </div>
  </section>
);

const mapStateToProps = ({ search }) => {
  const updateSearchState = {
    filterText: search.filterText,
    category: search.category,
    order: search.order,
    created: search.created,
  };
  return updateSearchState;
};

Header.propTypes = {
  filterText: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, {
  filterByText,
  sortByCategory,
  sortByOrder,
  sortByDate,
})(Header);
