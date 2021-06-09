import * as React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

const TemplateLoader = (props) => (
  <ContentLoader
    viewBox="0 0 100% 450"
    height={650}
    width="100%"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="42" y="77" rx="10" ry="10" width="100%" height="200" />
  </ContentLoader>
);

TemplateLoader.propTypes = {
  props: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TemplateLoader;
