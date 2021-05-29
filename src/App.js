import React, { useEffect } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTemplates } from './redux/template/template.actions';

const propTypes = {
  getTemplates: PropTypes.func.isRequired,
  template: PropTypes.instanceOf(Object).isRequired,
};
function App({ template: { templates, loading }, getTemplates }) {
  useEffect(() => {
    getTemplates();
  }, [getTemplates]);

  return (
    <div className="App">
      {!loading ? (
        <div>
          {templates.map((template) => (
            <div>
              <div>{template.name}</div>
              <div>{template.category}</div>
              <div>{template.link}</div>
            </div>
          ))}
        </div>
      ) : (
        <h1>hHELLO </h1>
      )}
    </div>
  );
}
App.propTypes = propTypes;
const mapStateToProps = (state) => ({
  template: state.templates,
});
export default connect(mapStateToProps, { getTemplates })(App);
