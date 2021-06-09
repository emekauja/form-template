import React, { useEffect } from 'react';
import './assets/css/App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTemplates } from './redux/template/template.actions';
import Wrapper from './components/wrapper';
import Header from './components/header';
import Pagination from './components/pagination';
import TemplateCard from './components/templateCard';
import TemplateLoader from './components/templateLoader';

const propTypes = {
  getTemplates: PropTypes.func.isRequired,
  template: PropTypes.instanceOf(Object).isRequired,
};
function App({ template: { templates, loading }, getTemplates }) {
  useEffect(() => {
    getTemplates();
  }, [getTemplates]);

  const filteredTemplates = templates;

  return (
    <Wrapper>
      <div className="App">
        <Header />
        {!loading ? (
          <div className="template-list">
            {filteredTemplates.map((template) => (
              <TemplateCard template={template} />
            ))}
          </div>
        ) : (
          <h1>hHELLO </h1>
        )}
        <Pagination />

        <div>
          <TemplateLoader />
        </div>
      </div>
    </Wrapper>
  );
}
App.propTypes = propTypes;
const mapStateToProps = ({ templates }) => ({
  template: templates,
});
export default connect(mapStateToProps, { getTemplates })(App);
