import * as React from 'react';
import PropTypes from 'prop-types';
import './elements.css';

const templateCard = ({ template }) => (
  <div className="card">
    <div className="card-details">
      <h1 className="card-title">{template.name}</h1>
      <p className="card-description">{template.description}</p>
    </div>
    <div className="card-link-container">
      <a
        className="card-link"
        href={template.link}
        target="blank"
        tabIndex="-1"
      >
        Use Template
      </a>
    </div>
  </div>
);

templateCard.propTypes = {
  template: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default templateCard;
