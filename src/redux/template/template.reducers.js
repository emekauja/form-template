import { TemplateActionTypes } from './template.types';

const initialState = {
  templates: [],
  loading: true,
  error: {},
  rehydrated: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TemplateActionTypes.GET_TEMPLATES:
      return { ...state, templates: payload, loading: false };

    case TemplateActionTypes.TEMPLATE_ERROR:
      return { ...state, error: null, loading: false };

    case TemplateActionTypes['persist/REHYDRATE']:
      return { ...state, rehydrated: true };

    default:
      return state;
  }
};
