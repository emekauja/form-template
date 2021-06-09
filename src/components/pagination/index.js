import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import {
  loadNextPage,
  loadPreviousPage,
  setTotalPages,
} from '../../redux/pagination/pagination.actions';
import './elements.css';

const Pagination = ({ templates, currentPage, totalPages }) => {
  setTotalPages(templates);
  return (
    <div className="paginate">
      <div className="paginate-btn previous-btn">
        <button
          type="button"
          onClick={() => loadPreviousPage(templates, currentPage)}
        >
          Previous
        </button>
      </div>

      <div className="paginate-details">
        <div>{currentPage}</div>
        <p>of</p>
        <div>{totalPages}</div>
      </div>

      <div className="paginate-btn next-btn">
        <button
          type="button"
          onClick={() => loadNextPage(templates, currentPage)}
        >
          Next
        </button>
        <ArrowRight />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,

  templates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ pagination, templates }) => ({
  currentPage: pagination.currentPage,
  totalPages: pagination.totalPages,
  templates: templates.templates,
});
export default connect(mapStateToProps, {
  loadNextPage,
  loadPreviousPage,
  setTotalPages,
})(Pagination);
